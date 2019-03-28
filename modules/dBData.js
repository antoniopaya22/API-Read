const Data = require('../models/data')

module.exports = {


    
    //Get: 
    //Return: all Data
    getAllData: function (Callback) {

        Data.find({}, function (err, docs) {
            
            if (err) {
                console.log("This is the error:" + err)
                Callback(null);
            }
            else {
                console.log("data=",docs)
                Callback(docs);
            }
        });

    },
    //Get: starting time and ending time
    //Return: all Data between those times
    getDataBetweenTimes: function (timeStart, timeEnd, Callback) {

        Data.find({$where: `parseInt(this.hour)<=${timeEnd} && parseInt(this.hour)>=${timeStart}`}, function (err, doc) {

            if (err) {
                console.log("This is the error:" + err)
                Callback(null);
            }
            else {
                if (doc) {
                    Callback(doc);
                }
                else {
                    Callback(null);
                }
            }

        });
    },
    
    //Get: data's id
    //Return: 1 specific(id) Data information
    getDataById: function (id, Callback) {

        Data.find({ id: id }, function (err, doc) {

            if (err) {
                console.log("This is the error:" + err)
                Callback(null);
            }
            else {
                if (doc) {
                    Callback(doc);
                }
                else {
                    Callback(null);
                }
            }

        });
    }

}