const mongoose = require('mongoose');

const mongoDB = process.env.MONGO_USERS_URL;
console.log(mongoDB);
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
const dbconection = mongoose.connection;
dbconection.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = exports = mongoose;
