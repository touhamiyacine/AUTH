const express = require('express');
const app=express();
const mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"gssprod"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM utilisateurs", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  
 



//import routes
const authRoute = require('./routes/auth.js');
//Route Middlewares

app.use('/api/user',authRoute);



app.listen(52405, () => console.log("server up and running"))