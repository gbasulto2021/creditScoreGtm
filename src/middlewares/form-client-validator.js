const formClientValidator = (req,res,next)=>{
  const {isValid} = req.body
   
  if (isValid) {
      next()
  }else {
      res.render("form-client.html", {
          login: true,
          name: req.session.name,
          rol: req.session.rol,
          alert: true,
          alertTitle: "Error",
          alertMessage: "Debe rellenar el formulario correctamente",
          alertIcon: "error",
          showConfirmButton: false,
          timer: 1500,
          ruta: "add"
      });
    }
  
}

module.exports = formClientValidator;