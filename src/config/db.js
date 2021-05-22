/**
 * Objeto con las variables de configuracion de las
 * bases de datos a usar en la aplicacion
 *
 * @author Jefferson Lara <jetox21@gmail.com>
 */

module.exports = {

    /**
     * Indica si se muestran los script que av ejecutando el orm
     * y los errores que arroja la ejeccucion de las setencias sql
     *
     * @var LOG_SEQUELIZE_TRANSACTIONS
     * @type Boolean
     */
    LOG_SEQUELIZE_TRANSACTIONS : true,
    /**
     * Contiene los parametros de configuracion de las bases de datos
     * que van a ser usadas por la aplicacion
     *
     * @var DATABASE
     * @type Object
     */
    DATABASES: {
        default: {
            HOST: '192.168.1.9',
            PORT: 49151,
            NAME: 'entrenamiento_epina',
            USERNAME: 'u_epina',
            PASSWORD: 'u_epina01*.,',
            DB_TYPE: 'postgres',
            POOL: {
                max: 5,
                min: 0,
                idle: 100
            },
            TIMEZONE: '-04:00'
        },
        others: {}

    }
}
