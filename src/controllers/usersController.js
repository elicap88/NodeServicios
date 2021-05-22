/**
 * Clase controller users
 * @class usersController
 * @module controllers
 * @copyright (c) SIGIS Soluciones Integrales GIS, C.A.
 */
"use strict";
var sequelize = require('../utils/sequelizeInstance');
var users = sequelize.import('../models/entrenamiento-sprint1/usuarios');
var md5 = require('md5');

class usersController {
    /**
     * IO Constructor
     */
    constructor(){}

    /**
     * Metodo utilizado por HTTP POST
     * @method create
     * @param req
     * @param res
     */
    create(req,res){
        res.status(200).json(
            {
                sucess: true,
                messages: 'Estructura base POST',
                errors: null,
                data: [{}, {}, {}]
            }
        );
    }
    /**
     * Metodo utilizado por HTTP PUT
     * @method update
     * @param req
     * @param res
     */
    update(req,res){
        res.status(200).json(
            {
                sucess: true,
                messages: 'Estructura base PUT',
                errors: null,
                data: [{}, {}, {}]
            }
        );
    }
    /**
     * Metodo utilizado por HTTP DELETE
     * @method destroy
     * @param req
     * @param res
     */
    destroy(req,res){
        res.status(200).json(
            {
                sucess: true,
                messages: 'Estructura base DELETE',
                errors: null,
                data: [{}, {}, {}]
            }
        );
    }
    /**
     * Metodo utilizado por HTTP GET (GET_ONE)
     * Metodo Login de Usuarios
     * @method findOne
     * @param req
     * @param res
     */
//Metodo para autenticar usuarios (Buscar un Usuario ya registrado y validar su contraseña)
    autenticarUsuario(req,res){
//Json para recibir datos  (Usuario y Pass)
  var  usuario = {
                  logUsuario : req.body.logUsuario,
                  passUsuario : req.body.passUsuario
                  };
 //Validacion de body recibido
   if(usuario.logUsuario != null && usuario.passUsuario != null){
//Busqueda de usuario en la bd
    users.findOne({ where: {logUsu: usuario.logUsuario}
        }).then(function(user) {
          //Funcion para encriptar la contraseña recibida
         var passCryp = md5(usuario.passUsuario);
            if (user) {
              //Validar si la contraseña de bd y la ingresada son iguales
              if(user.pasUsu != passCryp){
                 res.status(200).json(
                     {
                         sucess: true,
                         messages: 'Contraseña incorrecta',
                         errors: null,
                         data: {}
                     }
                 );
             }
             else{
               //Variable para verificar el nivel de Administrador del Usuario
               var nivelAdmn;
               if(user.nivAdm = true){
                 nivelAdmn = "Nivel Administrador";
               }
               else{
                 nivelAdmn = "No posee nivel admnistrador"
               }
               res.status(200).json(
                 { sucess: true,
                   messages: '',
                   errors: null,
                   data: {Nombre:user.nomUsu,
                         Apellido: user.apeUsu,
                         Adm: nivelAdmn
                       }
                 });
             }
         } else{
                console.log("No existe");
                res.status(200).json(
                    {
                        sucess: true,
                        messages: 'Usuario No existe',
                        errors: null,
                        data: {}
                    }
                );
          }
        }).catch(function(err) {
            console.log(":", err);
            res.status(500).send({ error: 'Usuario y Contraseña invalida!' });
        });
        }
        else{  res.status(500).send({ error: 'Usuario y Contraseña Indefinidos!' });
        }
    }
    /**
     * Metodo que devuelve todos los Usuarios
     * @method findaLL
     * @param req
     * @param res
     */
    buscarTodos(req,res){
    //Metodo findAll que me devuelve todos los uuarios
        users.findAll()
        .then(function(user) {
            res.status(200).json(
                {
                    sucess: true,
                    messages: 'Usuarios registrados',
                    errors: null,
                    data: [user]
                        
                }
            );
        });
        
    }
    /**
     * Metodo utilizado por HTTP OPTIONS
     * @method options
     * @param req
     * @param res
     */
    options(req,res){
        res.status(200).json(
            {
                sucess: true,
                messages: 'Estructura base OPTIONS',
                errors: null,
                data: [{}, {}, {}]
            }
        );
    }
}

module.exports = new usersController();
