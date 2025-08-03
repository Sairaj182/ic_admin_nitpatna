const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,
    }
);

sequelize.authenticate()
    .then(() => console.log('✅ Database connected'))
    .catch(err => console.error('❌ Database connection error:', err));


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Event = require('./EventModule/event')(sequelize, DataTypes);

module.exports = db;
module.exports.sequelize = sequelize;
