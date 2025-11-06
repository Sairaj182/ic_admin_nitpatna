const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const Notice = sequelize.define('Notice', {
    id: {
        type: DataTypes.STRING(36),
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Notice;
