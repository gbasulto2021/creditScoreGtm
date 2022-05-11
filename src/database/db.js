const mysql = require("mysql");

require('dotenv').config({
  path:'./src/env/.env'
}) //Variables de entorno

const connection = mysql.createConnection({
  host : process.env.DB_HOST,
  user : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_DATABASE
});

console.log(process.env.DB_PASS);

connection.connect((err) => {
  if (err) throw err;
  console.log(`Database is connected`);

});

module.exports = connection;

