let express = require('express');
let app = express();
require('dotenv').config()
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();

//app.use(methodOverride());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers,Authorization,Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const dbConection = require('./utils/dbConection');
dbConection.conn();


let dBData = require('./modules/dBData');
let dBUsers = require('./modules/dbUser');

require("./routes/rdata.js")(app, dBData);
require("./routes/rusers.js")(app, dBUsers);

app.set("port", 3000);

app.listen(app.get("port"), function () {
    console.log("Servidor activo en el puerto: "+ app.get("port"))
});