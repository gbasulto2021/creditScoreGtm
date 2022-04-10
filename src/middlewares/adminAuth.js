const adminAuth = (req,res,next)=>{
    if (req.session.loggedin && req.session.rol === "admin") {
        return next()
      } else {
        res.render("register.html", {
          login: true,
          name: req.session.name,
          rol: req.session.rol,
          alert: true,
          alertTitle: "Error",
          alertMessage: "No tiene permisos para agregar usuarios",
          alertIcon: "error",
          showConfirmButton: false,
          timer: 1500,
          ruta: "",
        });
      }
}

module.exports = adminAuth;