'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sort_number:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Item.associate = function (models) {
    // associations can be defined here
  };
  return Item;
};