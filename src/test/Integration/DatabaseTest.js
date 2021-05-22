var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var sequelize = require('../../utils/sequelizeInstance');
var should = chai.should();


chai.use(chaiHttp);
//test para probar el metodo conexion con la base de datos
 describe('Base de Datos', function() {
   it('Checkeando Conexion', function(done) {
 	  sequelize
		  .authenticate()
		  .then(function () {
             console.log("Conectado a la base de datos");
       		done();
		  })
		  .catch(function (err) {
            console.log("Error en la conexión");
 		  });
 	});
 });