'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Artists', [
      {
        name: 'Legião Urbana',
        country: 'Brasil',
        genre: 'rock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Beatles',
        country: 'United Kingdom',
        genre: 'pop-rock',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Artists', null, {});
  }
};
