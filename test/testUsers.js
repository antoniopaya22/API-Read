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


mocha.describe('Login tests: ',function () {
    this.timeout(5000);

	it('Iniciar sesión con un usuario, contraseña y rol correctos.', (done) => {
		chai.request(url)
			.post('/login')
			.send({userName:"user_asturias", password: "user_asturias"})
			.end( function(err,res){
				expect(res).to.have.status(200);
				done();
			});
    });

	it('Iniciar sesión con un usuario y contraseña incorrectos.', (done) => {
		chai.request(url)
			.post('/login')
			.send({userName:"userX", password: "user",})
			.end( function(err,res){
				expect(res).to.have.status(403);
				done();
			});
    });
    
});

mocha.describe('Usuarios tests',function(){
    this.timeout(5000);

	it('Registrar un usuario auditor una vez iniciado sesión como gestor.', (done) => {
		var user = {
			"userName": "antonio_as",
			"password": "antonio_as"
		}
		var token = auth.createToken(mongo.login("gestor","gestor").userName, roles.gestor_usuarios)
		chai.request(url)
            .post('/registerAuditor')
            .set('Authorization',token)
			.send(user)
			.end((err, res) => {
				res.should.have.status(200);
			done();
			});
    });

	it('Registrar un usuario auditor una vez iniciado sesión con un usuario con rol diferente a gestor.', (done) => {
		var user = {
			"userName": "antonio_as",
			"password": "antonio_as"
		}
		var token = auth.createToken(mongo.login("auditor","auditor").userName, roles.auditor)
		chai.request(url)
            .post('/registerAuditor')
            .set('Authorization',token)
			.send(user)
			.end((err, res) => {
				res.should.have.status(403);
			done();
			});
    });
});
