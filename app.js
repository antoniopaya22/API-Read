'use strict';
/**                                                                          
 *
 *    ===========================================================================
 *    Aplicacion realizada en NodeJS que se conecta con una BBDD en MongoDB
 *    ======================
 *    @author Antonio Paya
 *
 */

//==========MODULOS===============
let express = require('express');
let app = express();
require('dotenv').config()
let bodyParser = require('body-parser');
let dBData = require('./modules/dBData');
let dBUsers = require('./modules/dbUser');
let auth = require('../modules/authentication/authentication')


//==========VARIABLES===============
app.set("port", 3000);

//==========INICIACION=============
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, UPDATE, PUT, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers,Authorization,Origin, X-Requested-With, Content-Type, Accept, token");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//==========RUTAS================
require("./routes/routesDatos.js")(app, dBData, auth);
require("./routes/routesUsers.js")(app, dBUsers, auth);


//===========RUN===============
// Lanza el servidor
app.listen(app.get("port"), function () {
  console.log("===================================");
  console.log("API - READ ");
  console.log("===================================");
  console.log("Autor: Antonio Paya Gonzalez");
  console.log("Servidor activo en el puerto: " + app.get('port'));
});