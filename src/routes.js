"use strict";
/**
 * Metodo para la publicacion de rutas
 * @example
 *
 *  routes.publish('GET,POST,PUT,DELETE,..',
 *              'nombre_endpoint',
 *              'nombre_controller?nombre_metodo',
 *               arreglos_middlewares)
 *
 *  NOTA: 'el arreglo middlewares recibe el nombre de los archivos en la carpeta middlewares
 *         o los nombres de metodos existente en el controlador referenciado en la ruta.
 *         El arreglo de middlewares no es requerido'
 *
 * @packages
 * @author Jefferson Lara
 * @date 08-10-2016
 * @param routes {object}
 */
var responseUtil = require('./utils/responseUtil');
var config = require('./config');

module.exports = function (routes) {

    /**
     * @api {get} / Request base route
     * @apiVersion 0.0.1
     * @apiName GetBaseRoute
     * @apiGroup Base
     *
     * @apiSuccess {String} code HTTP response code.
     * @apiSuccess {Object} data response data.
     * @apiSuccess {String} data.inner The port in which the api was started.
     * @apiSuccess {String} error if errors found.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "code": 200,
     *       "data": {
     *          "inner":"Api started on port 120"
     *       },
     *       "error": null
     *     }
     */
    
    //Crea tus rutas aca
    //Ruta para la llamada del metodo autenticarUsuario encargado de autenticar Usuarios
  routes.publish('post','/aunteticarUsuarios','usersController?autenticarUsuario',function (req,res) {
    responseUtil.sendResponse(res,200,{
        "inner":"Eliana " + config.API_PORT
    });
 },null);
 //Ruta para la llamada del metodo buscar todos los usuarios
routes.publish('get','/buscarTodo','usersController?buscarTodos',function (req,res) {
    responseUtil.sendResponse(res,200,{
        "inner":"Mensaje " + config.API_PORT
    });
},null);
};
