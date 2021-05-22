const chai = require('chai')
const mocha = require('mocha')
const config = require ('../../config');
var sequelize = require('../../utils/sequelizeInstance');


mocha.describe('config', function() {
	//test para probar las constantes de la base de datos
  it('Configuracion de constantes para la base de datos', function(done) {
		chai.assert.typeOf(config, 'object');
		chai.assert.typeOf(config.db.DATABASES.default.HOST, 'string');
		chai.assert.typeOf(config.db.DATABASES.default.HOST, 'string');
		chai.assert.typeOf(config.db.DATABASES.default.NAME, 'string');
		chai.assert.typeOf(config.db.DATABASES.default.USERNAME, 'string');
		chai.assert.typeOf(config.db.DATABASES.default.PASSWORD, 'string')
		done(); 
 	});
//test para probar las constantes de aplicación
 	it('Configuracion de constantes para la aplicacion', function(done) {
		 
		chai.assert.typeOf(config.app, 'object');
		chai.assert.typeOf(config.app.API_PORT, 'number');
		chai.assert.typeOf(config.app.API_LOCATION, 'string');
 		done(); 
 	});

 });
