/**
 * Objeto con las variables de configuracion para la
 * implementación de https
 *
 * @see https://nodejs.org/api/https.html
 * @copyright (c) SIGIS Soluciones Integrales GIS, C.A.
 */
const path = require("path");
module.exports = {
    /**
     * Ruta del archivo de clave 
     */
    key: 'ssl/key.pem',
    /**
     * Ruta del certificado
     */
    cert: 'ssl/cert.pem',
    /**
     * passphrase
     */
    passphrase : '01*.,' 
}
