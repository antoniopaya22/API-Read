let mongoData = require('../modules/mongoData');
const mongoose = require('mongoose');
// Define schema
let Schema = mongoose.Schema;

let DataSchema = new Schema({
    id: String,
    device: String,
    temperature: String,
    gps: String,
    hour: String
});

module.exports = mongoData.model('datos', DataSchema );
