const editClientValidator = (req,res,next)=>{
    const {isValid} = req.body
    const {id} = req.params
     
    if (isValid) {
        next()
    }else {
        res.render("edit-client.html", {
            login: true,
            name: req.session.name,
            rol: req.session.rol,
            alert: true,
            alertTitle: "Error",
            alertMessage: "Debe rellenar el formulario correctamente",
            alertIcon: "error",
            showConfirmButton: false,
            timer: 1500,
            data:req.session.client.id,
            ruta: `update/${id}`
        });
      }
    
  }
  
  module.exports = editClientValidator;