'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crear la tabla "Jugadores"
    await queryInterface.createTable('Jugadores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      // Aquí puedes agregar más campos según sea necesario
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la tabla "Jugadores"
    await queryInterface.dropTable('Jugadores');
  }
};

