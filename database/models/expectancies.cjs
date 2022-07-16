'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expectancies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Expectancies.init({
    countryId: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    expectancy: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Expectancies',
  });
  return Expectancies;
};