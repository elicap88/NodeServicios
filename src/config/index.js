/**
 * Exporta todos los configs para poder ser usados con require.
 * 
 * @author Robert Bruno <robert.bruno@sigis.com.ve> 27.06.2018 Fix issues #1 add support for environment variables
 * @copyright (c) SIGIS Soluciones Integrales GIS, C.A.
 */

//variables para cargar los archivos de configuración
var fs = require('fs'),
    colors = require('colors'),
    path = require('path'),
    flatten = require('flat'),
    configs = {},
    config_map=[],
    token=".",
    env = process.env;

//Se cargan los archivos de configuración y se agragan a la variable configs.
fs.readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf('.') !== -1) && (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    .forEach(function (file) {
        var fnc = require(path.join(__dirname,file));
        var nameConfig = file.substring(0,file.indexOf('.'));
        configs[nameConfig] = fnc;
    });

//se Mapea las variables de entorno
config_map = flatten(configs);
Object.keys(config_map).forEach(function(el) {    
    const env_var_name= el.split('.').join('_').
            split('-').join('_').toUpperCase();
    
    if(process.argv.indexOf("print-config-map")!= -1){
        console.log(el+" = "+ env_var_name);
    }

    if(env[env_var_name]){        
        var value ="";

        try {
            value= JSON.parse(env[env_var_name]);
            console.debug(colors.green(env_var_name+"="+env[env_var_name]));
        } catch (error) {
            //console.warn(colors.yellow("Value of "+env_var_name+" is not a valid json"));
            value= '"'+env[env_var_name]+'"';
        }  
        try {
            var cmd= "configs."+el+"="+value;
            eval(cmd);
            console.debug(colors.green(env_var_name+"="+env[env_var_name]));
        } catch (error) {
            console.error(cmd+" "+error.message);
        }
    }    
}); 

module.exports = configs;