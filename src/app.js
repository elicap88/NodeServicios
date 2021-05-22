'use strict';

var config = require('./config');
var colors =  require('colors');
var sequelizeInstance = require('./utils/sequelizeInstance');
var globalization = require('./utils/globalizationInstance');
var log = require('loglevel');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var express = require('express');
var app = express();
var morgan = require("morgan");
var liveRoutes = require("light-routes");
var fs = require('fs');
var http = require('http');
var https = require('https');
var server = null;
var serverType = "https";
var route = liveRoutes.init({
    pathControllers:path.join(__dirname,'controllers'),
    pathMiddlewares:path.join(__dirname,'middlewares'),
});


/**
 * Agrega los middlewares a usar por defecto segun el config de la aplicacion a las rutas creadas
 * en express
 *
 * @author Jeferson Lara <jetox21@gmail.com>
 */
function loadMiddDefault(){
    let midd = require('./middlewares'),
        loadMidd = config.app.MIDDLEWARES_AUTOLOAD,
        len = loadMidd.length;
    if(len > 0) {
        for (var i = 0; i < len; i++) {
            app.use(midd[loadMidd[i]]);
        }
    }
}

/**
 * Inicializa el servicio, publica las rutas
 * @method initService
 * @author Daniel Prato <daniel.prato@sigis.com.ve>
 */
function initService(){
    require('./routes')(route);
    log.setLevel(config.app.LOG_LEVEL);
    app.use(morgan(config.morgan.mode,config.morgan.options ));
    app.use(globalization.init);
    app.use(cors(config.cors));
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    loadMiddDefault();
    app.use('/',route.getPublish());

    try {
        var sslOptions = {
            key: fs.readFileSync(path.join(config.ssl.key)),
            cert: fs.readFileSync(path.join(config.ssl.cert))
        };

        server = https.createServer(Object.assign(config.ssl,sslOptions), app);
    } catch (error) {
        console.warn(colors.red(error.message));
        console.warn(colors.red('ssl failure, please check ssl config'));
        serverType="http";
        server = http.createServer(app);
    }

    server.listen(config.app.API_PORT, function(){
        log.info(colors.yellow('Listening '+serverType+' on port: ' + config.app.API_PORT));
    });
}

initService();

module.exports = app;
