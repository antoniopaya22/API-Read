const Data = require('../models/data')

module.exports = {

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