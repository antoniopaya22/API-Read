//const Data = require('../models/data');
const auth=require('../utils/authentication')

module.exports = function (app ,dBData) {



    //------------------------------------------------------------------------------------------------------------
    
    app.get("/data",auth.isAuth ,function (req, res) {
        dBData.getAllData(function (value, err) {
            if (err) {
                res.status(400).send("error");
            }
            else {
                res.send(value);
            }
        });
    });

    app.get("/data/:id",auth.isAuth,function (req, res) {
        let id = req.params.id;
        dBData.getDataById(id,function (value, err) {
            if (err) {
                res.status(400).send("error");
            }
            else {
                res.send(value);
            }
        });
    });

    app.get("/specificdata",auth.isAuth,function (req, res) {
        let startDate = req.query.startDate
        let endDate = req.query.endDate

        dBData.getDataBetweenTimes(startDate, endDate, function (value, err) {
            if (err) {
                res.status(400).send("error");
            }
            else {
                res.send(value);
            }
        });
    });
};
