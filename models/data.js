let mongoose = require('mongoose');
// Define schema
let Schema = mongoose.Schema;

let DataSchema = new Schema({
    id: String,
    device: String,
    temperature: String,
    gps: String,
    hour: String
});

//Export function to create "Acta" model class
module.exports = mongoose.model('datos', DataSchema );
