'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albums', [
      {
        title: 'II' ,
        releaseDate: '1987-01-05 00:00:00',
        artistId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: 'White Album' ,
        releaseDate: '1968-12-04 00:00:00',
        artistId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Albums', null, {})
  }
};
