const auth=require('../utils/authentication');

module.exports=function(app,mongo){

    app.post("/register", function (req, res) {
        let userName = req.body.userName;
        let password = req.body.password;
        mongo.createUser(userName, password).then(user=>{
            res.send(user)
        }).catch(err=> {
            res.status(500).send("Cant create user :"+err)
        })
    });

    app.post("/login",function (req,res){
        mongo.login(req.body.userName, req.body.password).then(doc => {
            console.log(req.body.userName);
            res.send(auth.createToken(doc.userName))
        }).catch(err =>{
            res.status(403).send(err)
        });
    });

    
}