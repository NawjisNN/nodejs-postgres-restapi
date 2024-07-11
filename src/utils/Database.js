const { Sequelize } = require('sequelize');
const env = require('../configs/ApplicationConfiguration');

const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USER, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    dialect: env.DATABASE_DIALECT,
    schema: env.DATABASE_SCHEMA,
    define: {
        timestamps: false
    },
});

module.exports = { sequelize };
