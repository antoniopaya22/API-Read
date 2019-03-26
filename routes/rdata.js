
module.exports = function (app, dBData) {

    app.get("/data", function (req, res) {
        dBData.getAllData(function (value, err) {
            if (err) {
                res.status(400).send("error");
            }
            else {
                res.send(value);
            }
        });
    });

    app.get("/data/:id", function (req, res) {
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

    app.get("/specificdata",  function (req, res) {
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
