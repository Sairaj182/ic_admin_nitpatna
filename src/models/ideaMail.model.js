const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const IdeaMail = sequelize.define('IdeaMail', {
    id: {
        type: DataTypes.STRING(36),
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
});

module.exports = IdeaMail;
