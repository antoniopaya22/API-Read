
module.exports=function(app,dbUser,auth){

    /**
     * POST registrar usuario por defecto
     */
    app.post("/registerUser", auth.isGestorAuth, function (req, res) {
        let userName = req.body.userName;
        let password = req.body.password;
        let rol = process.env.ROL;
        dbUser.createUser(userName, password, rol).then(user=>{
            res.send(user)
        }).catch(err=> {
            res.status(500).json({ error: err.toString() });
        })
    });

    /**
     * POST login with user and password
     */
    app.post("/login", (req, res) => {
        dbUser.login(req.body.userName, req.body.password).then(doc => {
            res.send(auth.createToken(doc.userName, doc.rol))
        }).catch(err =>{
            res.status(403).json({ error: err.toString() });
        })
    });

    
}