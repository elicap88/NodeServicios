/**
 * Datos de configuración del modulo cros. For options please see:
 * 
 * https://github.com/expressjs/cors.
 * 
 * A bit more about CORS
 * For study purposes about CORS, to understand its headers and most important
 * to learn how to customize the rule for your API, I recommend you to read 
 * this full documentation:
 * 
 * developer.mozilla.org/en-US/docs/Web/HTTP/AccesscontrolCORS
 * 
 * @auth robert.bruno@sigis.com.ve
 * @copyright (c) SIGIS Soluciones Integrales GIS, C.A.
 */
module.exports = {
	/**
	 * 
	 * @property  {array} allowedHeaders 
	 */
	allowedHeaders: ["Content-Type", "Authorization"],
	/**
	 * Configures the Access-Control-Allow-Credentials CORS header. 
	 * Set to true to pass the header, otherwise it is omitted.
	 * 
	 * @property {boolean} credentials 
	 */
	credentials : true,
	/**
	 * Configures the Access-Control-Allow-Origin CORS header
	 */
	origin : '*'
}
