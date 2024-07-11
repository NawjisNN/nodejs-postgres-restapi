const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/Database');
const User = require('./UserModel');

class Text extends Sequelize.Model {}

Text.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    content: {
        type: DataTypes.TEXT,
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
    modelName: 'texts',
    freezeTableName: true,
    timestamps: false,
});

Text.sync({ force: false });

module.exports = Text;
