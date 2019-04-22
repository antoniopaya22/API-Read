const Data = require('../models/data')

module.exports = {

    getAllData: function (Callback) {
        console.log(Data.model.host);
        Data.find({}, function (err, docs) { 
            if (err) {
                Callback(err);
            }
            else {
                Callback(docs);
            }
        });
    },

    getDataById: function (id, Callback) {
        Data.find({ id: id }, function (err, doc) {
            if (err) {
                Callback(err);
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