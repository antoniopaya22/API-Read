let chai = require('chai');
let mocha = require('mocha');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
let should = chai.should();
require('dotenv').config()
const dbConection = require('../utils/dbConection');
dbConection.conn();
const dBData = require('../modules/dBData');
const dBUsers = require('../modules/dbUser');
const auth = require("../utils/authentication")

chai.use(chaiHttp);
const url= 'http://localhost:3000';

mocha.describe('login',function(){
    this.timeout(5000);
    it('Deberia loguearse y devolver el token',done=>{
        chai.request(url)
        .post('/login')
        .send({userName:"user", password: "user"})
        .end(function(err,res){
            expect(res).to.have.status(200);
            done();
        });
    });
});

mocha.describe('search',function(){
    it('Data by ID: ',done=>{
        var token = auth.createToken(dBUsers.login("user","user").userName);
        chai.request(url)
        .get('/data/ID_CH2')
        .set('Authorization',token)
        .end(function(err,res){
            expect(res).to.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(1);
            done();
        })
    });

    it('Data by date: ',done=>{
        var token = auth.createToken(dBUsers.login("user","user").userName);
        chai.request(url)
        .get('/specificdata?startDate=1&endDate=100')
        .set('Authorization',token)
        .end(function(err,res){
            expect(res).to.have.status(200);
            res.body.should.be.a('array');
            done();
        })

        
    });
    it('all data: ',done=>{
        var token = auth.createToken(dBUsers.login("user","user").userName);
        chai.request(url)
        .get('/data')
        .set('Authorization',token)
        .end(function(err,res){
            expect(res).to.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.gt(7);
            done();
        })

        
    });
});