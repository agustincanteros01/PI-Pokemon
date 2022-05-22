const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('tipos', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
  })
}