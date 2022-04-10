const clientsController = {};

const connection = require("../database/db");

clientsController.getClients = (req,res)=>{
                
        let sql = "SELECT * FROM usuario";
       connection.query(sql,(error, results) => {
            if (error) throw error;
          //  console.log(results);
         
          res.render("list-clients.html", {
            login: true,
            name: req.session.name,
            rol: req.session.rol,
            clients:results
          });
                    
          }
        )
       
  
};

clientsController.addClient = (req,res)=>{
  const {
    nombre,
    apellidos,
    ci,
    ul,
    experiencia,
    capago,
    resfamiliar,
    otrosIngresos,
    escolaridad,
    tasa,
    garantia,
  } = req.body;
  
  const dataToDb = {
    nombre,
    apellidos,
    ci,
    ul,
    experiencia,
    capago,
    resfamiliar,
    otrosIngresos,
    escolaridad,
    tasa,
    garantia,
    total: req.session.total
  };
  
    let sql = "INSERT INTO usuario SET ?";

    connection.query(
      sql,
      dataToDb,
      (error, result) => {
        if (error) throw error;
        res.render("form-client.html", {
          login: true,
          name: req.session.name,
          rol: req.session.rol,
          alert: true,
          alertTitle: "Reporte",
          alertMessage: "Reporte realizado con exito",
          alertIcon: "success",
          showConfirmButton: false,
          timer: 1500,
          ruta: "clients",
        });
      }
    );
    req.session.total = "";
}

clientsController.getOneClient = (req, res)=>{
  // console.log(req.url);
  const {id} = req.params
  let sql = "SELECT * FROM usuario WHERE id= ?";
       connection.query(sql,[id],(error, result) => {
            if (error) throw error;
          // console.log(result[0]);
          res.render("edit-client.html", {
            login: true,
            name: req.session.name,
            rol: req.session.rol,
            data:result[0]
          });
                    
          }
        )
}

clientsController.updateClient = (req,res)=>{
  
 const {id}= req.params
  const {
    nombre,
    apellidos,
    ci,
    ul,
    experiencia,
    capago,
    resfamiliar,
    otrosIngresos,
    escolaridad,
    tasa,
    garantia,
  } = req.body;
  
  const dataToDb = {
    nombre,
    apellidos,
    ci,
    ul,
    experiencia,
    capago,
    resfamiliar,
    otrosIngresos,
    escolaridad,
    tasa,
    garantia,
    total: req.session.total
  };
  
    let sql = "UPDATE usuario SET ? WHERE id= ?";

    connection.query(sql,[dataToDb,id],(error, result) => {
        if (error) throw error;
        // console.log(result);
        res.render("edit-client.html", {
          login: true,
          name: req.session.name,
          rol: req.session.rol,
          data:{id},
          alert: true,
          alertTitle: "Reporte",
          alertMessage: "Reporte actualizado con exito",
          alertIcon: "success",
          showConfirmButton: false,
          timer: 1500,
          ruta: "clients",
        });
      }
    );
    req.session.total = "";
}

clientsController.deleteClient = (req,res)=>{


  const {id} = req.params;

let sql = "DELETE FROM usuario WHERE id= ?"

connection.query(sql,[id],(error,result)=>{
 if(error) throw error;
 res.redirect("/clients")

})
}



module.exports = clientsController;