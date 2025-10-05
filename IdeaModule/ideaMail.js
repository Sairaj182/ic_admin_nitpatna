const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const IdeaMail = sequelize.define("IdeaMail", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = IdeaMail;
