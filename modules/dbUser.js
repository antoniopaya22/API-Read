const user=require('../models/user');

module.exports = {

    createUser: (userName, password, rol) => {
        return user.findOne({userName:userName}).then(doc => {
            console.log(doc);
            if(doc !== null){
                return new Promise((res, rej) => {
                    rej("Usuario ya existente");
                });
            }
            return new Promise((res, rej) => {
                user.create({ userName: userName }).then(doc => {
                    doc.setPassword(password)
                    doc.setRol(rol)
                    doc.save().then(() => {
                        res(doc)
                    })
                }).catch(err => {
                    console.log(err);
                    rej(err)
                })
            });
        }).catch(err =>{
            return {Error: err};
        })
    },

    login: (userName, pass) => {
        return user.validate(userName, pass)
    }

}
