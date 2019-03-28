const mongoose = require('mongoose');

module.exports =  {
  conn:function(){
   
    const mongoDB = process.env.MONGO_URL;
    mongoose.connect(mongoDB,{ useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    mongoose.set('useCreateIndex', true)
    const dbconection = mongoose.connection;
    dbconection.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }
}
