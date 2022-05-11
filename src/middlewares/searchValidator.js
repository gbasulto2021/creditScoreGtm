const searchValidator = (req,res,next)=>{
    const {search} = req.body
       
    if (search.length == 11) {
        next()
    }else {
        res.render("list-clients.html", {
            login: true,
            name: req.session.name,
            rol: req.session.rol,
            alert: true,
            alertTitle: "Error",
            alertMessage: "El Carnet de Identidad debe ser un numero de 11 digitos. Por favor intente de nuevo",
            alertIcon: "error",
            showConfirmButton: false,
            timer: 2000,
            clients:null,
            ruta: "clients"
        });
      }
    
  }
  
  module.exports = searchValidator;