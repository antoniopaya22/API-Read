let chai = require('chai');
let mocha = require('mocha');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
let should = chai.should();
require('dotenv').config()
const dBUsers = require('../modules/dbUser');
const auth = require("../modules/authentication/authentication")
const roles = require('../models/roles')
chai.use(chaiHttp);
const url= 'http://localhost:3000';


mocha.describe('Buscar datos tests',function(){
    it('Buscar todos los datos: ', (done) =>{
        var token = auth.createToken(dBUsers.login("user_brasil","user_brasil").userName, roles.empleado_brasil);
        chai.request(url)
        .get('/data')
        .set('Authorization',token)
        .end(function(err,res){
            expect(res).to.have.status(200);
            res.body.should.be.a('array');
            done();
        }) 
    });

    it('Buscar dato existente dado su id: ', (done) =>{
        var token = auth.createToken(dBUsers.login("user_brasil","user_brasil").userName, roles.empleado_brasil);
        chai.request(url)
        .get('/data/ID_BRA')
        .set('Authorization',token)
        .end(function(err,res){
            expect(res).to.have.status(200);
            res.body.should.be.a('array');
            done();
        })
    });

    it('Buscar dato no existente dado su id: ', (done) =>{
        var token = auth.createToken(dBUsers.login("user_brasil","user_brasil").userName, roles.empleado_brasil);
        chai.request(url)
        .get('/data/XXX')
        .set('Authorization',token)
        .end(function(err,res){
            expect(res).to.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
            done();
        })
    });
});
