'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LifeExpectancies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      countryName: {
        type: Sequelize.STRING
      },
      countryCode: {
        type: Sequelize.STRING
      },
      maxAge: {
        type: Sequelize.DOUBLE
      },
      minAge: {
        type: Sequelize.DOUBLE
      },
      expectancy: {
        type: Sequelize.ARRAY(Sequelize.DOUBLE)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LifeExpectancies');
  }
};