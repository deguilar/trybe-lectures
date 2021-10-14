'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Albums', { 
      id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      releaseDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      artistId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Artists',
          key: 'id',
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('albums');

  }
};
