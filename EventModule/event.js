module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false
    }
  });

  return Event;
};
