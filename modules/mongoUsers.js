const mongoose = require('mongoose');

const mongoDB = process.env.MONGO_USERS_URL;
var conn = mongoose.createConnection(mongoDB,{ useNewUrlParser: true});
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = exports = conn;
