const express = require("express");
const connection = require("../database/db.js");
const routes = express.Router();
const bcryptjs = require("bcryptjs");
const calc = require("../middlewares/calc.js");
const clientsController = require("../controllers/clientsControllers.js");
const opAuth = require("../middlewares/opAuth.js");
const adminAuth = require("../middlewares/adminAuth.js");


routes.get("/login", (req, res) => {
  res.render("login.html");
});

routes.get("/register", adminAuth, (req, res) => {
res.render("register.html", {
    login: true,
    name: req.session.name,
    rol: req.session.rol,
  });
});

routes.post("/register", async (req, res) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const pass = req.body.pass;
    const rol = req.body.rol;
    let passHash = await bcryptjs.hash(pass, 8);
    
    let sql = "INSERT INTO user_credencials SET ?";

    connection.query(
      sql,
      { email: email, name: name, pass: passHash, rol: rol },
      (error, result) => {
        if (error) throw error;
        res.render("register.html", {
          login: true,
          name: req.session.name,
          rol: req.session.rol,
          alert: true,
          alertTitle: "Registro",
          alertMessage: "Registro realizado con exito",
          alertIcon: "success",
          showConfirmButton: false,
          timer: 1500,
          ruta: "",
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
});

routes.post("/auth", async (req, res) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
   


    if (email && pass) {
      let sql = "SELECT * FROM user_credencials WHERE email=?";
      connection.query(sql, [email], async (error, results) => {
        if (error) throw error;

        if (
          results.lenght == 0 ||
          !(await bcryptjs.compare(pass, results[0].pass))
        ) {
          res.render("login.html", {
            alert: true,
            alertTitle: "Error",
            alertMessage: "Correo o Contraseña incorrectos",
            alertIcon: "error",
            showConfirmButton: true,
            timer: false,
            ruta: "login",
          });
        } else {
          req.session.loggedin = true;
          req.session.name = results[0].name;
          req.session.rol = results[0].rol;
          req.session.total = "";

          res.render("login.html", {
            alert: true,
            alertTitle: "Conexion Exitosa",
            alertMessage: "Gracias!!",
            alertIcon: "success",
            showConfirmButton: false,
            timer: 1500,
            ruta: req.session.prevRoute,
          });
        }
      });
    } else {
      res.render("login.html", {
        alert: true,
        alertTitle: "Advertencia",
        alertMessage: "Por favor ingrese sus credenciales",
        alertIcon: "warning",
        showConfirmButton: true,
        timer: false,
        ruta: "login",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

routes.get("/", (req, res) => {
  if (req.session.loggedin) {
    res.render("dashboard.html", {
      login: true,
      name: req.session.name,
      rol: req.session.rol,
    });
  } else {
    res.render("dashboard.html", {
      login: false,
      name: "Debe iniciar sesion",
      rol: req.session.rol,
    });
  }
});

routes.get("/add",opAuth, (req, res) => {
  res.render("form-client.html", {
    login: true,
    name: req.session.name,
    rol: req.session.rol,
  });
});

routes.post("/add", opAuth,calc, clientsController.addClient);

routes.get("/clients",opAuth, clientsController.getClients);

routes.get("/update/:id",opAuth, clientsController.getOneClient);

routes.post("/update/:id", opAuth, calc, clientsController.updateClient);

routes.get("/delete/:id", opAuth,clientsController.deleteClient);

routes.get("/help", (req, res) => {
  if (req.session.loggedin) {
    res.render("help.html", {
      login: true,
      name: req.session.name,
      rol: req.session.rol,
    });
  } else {
    // console.log(req.rutaAnterior);
    res.redirect("/login");
  }
});

//logout

routes.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = routes;
