const mongoose = require('mongoose');
const user=require('../models/user');

module.exports = {

    createUser: (userName, password) => {
        return new Promise((res, rej) => {
            user.create({ userName: userName }).then(doc => {
                doc.setPassword(password)
                doc.save().then(() => {
                    res(doc)
                })
            }).catch(err => {
                rej(err)
            })
        })
    },

    login: (userName, pass) => {
        return user.validate(userName, pass)
    }

}
