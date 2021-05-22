/**
 * Clase que describe las pruebas del archivo usuarios
 * 
 * @class usuariosTest
 * @module test
 * w
 */
var request = require('supertest')
var ruta = request("http://localhost:9019")

'use strict';
describe('usuarios', function() {
//test para probar el metodo get de buscar todos los usuarios
    describe('GET', function() {
        it('Test para la Busqueda de todos los usuarios', function(done) {
            ruta.get('/buscarTodo')
                 .expect('Content-Type', /json/)
                 .expect(200, done);
            //done();
        });
    });

});