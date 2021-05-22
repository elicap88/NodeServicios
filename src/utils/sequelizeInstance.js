var sequelize = require('sequelize');
var config = require('../config');
/**
 * Contiene la inicializacion de sequelize para ser usado en toda la app
 * @class sequelizeInstance
 */
module.exports=(function () {

    /**
     * Instancia de sequelize
     * @property sequelizeInstance
     */
    var sequelizeInstance = new sequelize(
        config.db.DATABASES.default.NAME,
        config.db.DATABASES.default.USERNAME,
        config.db.DATABASES.default.PASSWORD,
        {
            host: config.db.DATABASES.default.HOST,
            port: config.db.DATABASES.default.PORT,
            dialect: config.db.DATABASES.default.DB_TYPE,
            pool: config.db.DATABASES.default.POOL,
            timezone : config.db.DATABASES.default.TIMEZONE,
            define: {
                freezeTableName: true,
                timestamps: false
            }
        }
    );

    return sequelizeInstance;
})();
