let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

require("./routes/rdata.js")(app, dBData);

app.listen(3000, function(){

});