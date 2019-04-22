let mongoData = require('../modules/mongoData');
// Define schema
let Schema = mongoData.Schema;

let DataSchema = new Schema({
    id: String,
    device: String,
    temperature: String,
    gps: String,
    hour: String
});

module.exports = mongoData.model('datos', DataSchema );
