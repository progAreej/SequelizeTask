'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  ToDo.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    completed: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ToDo',
    paranoid: true,  // Add this for soft delete functionality
  });
  
  return ToDo;
};
