const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/Database');

class User extends Sequelize.Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    sequelize,
    modelName: 'users',
    freezeTableName: true,
    timestamps: false,
});

User.sync({ force: false });

module.exports = User;
