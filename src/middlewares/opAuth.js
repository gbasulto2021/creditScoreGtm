const opAuth = (req,res,next)=>{
    if (req.session.loggedin) {
        next() 
         
       } else {
         req.session.prevRoute = req.path;
         res.redirect("/login");
       }
}

module.exports = opAuth;
