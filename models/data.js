let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let DataSchema = new Schema({
    id: String,
    device: String,
    temperature: String,
    gps: String,
    hour: String
});

module.exports = mongoose.model('datos', DataSchema );
