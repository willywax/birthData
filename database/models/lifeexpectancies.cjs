const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LifeExpectancies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LifeExpectancies.init({
    countryName: DataTypes.STRING,
    countryCode: DataTypes.STRING,
    maxAge: DataTypes.DOUBLE,
    minAge: DataTypes.DOUBLE,
    expectancy: DataTypes.ARRAY(DataTypes.DOUBLE)
  }, {
    sequelize,
    modelName: 'LifeExpectancies',
  });
  return LifeExpectancies;
};