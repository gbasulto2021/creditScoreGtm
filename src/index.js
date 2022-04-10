const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');
const routes = require("./routes");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//Variables de entorno
require('dotenv').config({
    path:'./src/env/.env'
}) 


//settings
const PORT = process.env.PORT || 5500;
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



//Var de session
app.use(session({
    secret:'secrect',
    resave:true,
    saveUninitialized:true
}))

//middlewares
app.use(cookieParser('mi secreto'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());
// app.use(flash());;
// app.use(passport.initialize());
// app.use(passport.session());


//cors
app.use(cors())



//routes
app.use(routes)

//static files
app.use(express.static(path.join(__dirname, 'public')));



//server
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})




