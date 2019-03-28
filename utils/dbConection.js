const mongoose = require('mongoose');

module.exports =  {
  conn:function(){
   
    const mongoDB = 'mongodb://Chicago:Chicago22@ds123346.mlab.com:23346/chicago';
    mongoose.connect(mongoDB,{ useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    mongoose.set('useCreateIndex', true)
    const dbconection = mongoose.connection;
    dbconection.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }
}
