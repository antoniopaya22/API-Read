const auth=require('../utils/authentication')

module.exports = function (app ,dBData) {

    /**
     * GET all datos
     */
    app.get("/data",auth.isAuth ,function (req, res) {
        dBData.getAllData(function (value, err) {
            if (err) {
                res.status(400).json({ error: err.toString() });
            }
            else {
                res.send(value);
            }
        });
    });

    /**
     * GET dato by id
     */
    app.get("/data/:id",auth.isAuth,function (req, res) {
        let id = req.params.id;
        dBData.getDataById(id,function (value, err) {
            if (err) {
                res.status(400).json({ error: err.toString() });
            }
            else {
                res.send(value);
            }
        });
    });

};
