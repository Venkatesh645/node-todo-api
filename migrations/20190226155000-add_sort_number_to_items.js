'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Items',
      'sort_number',
      Sequelize.INTEGER, {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    ).then(() => {
      return queryInterface.addIndex('Items', ['sort_number'])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Items',
      'sort_number',
      Sequelize.INTEGER
    ).then(() => {
      return queryInterface.removeIndex('Items', ['sort_number'])
    })
  }
};
