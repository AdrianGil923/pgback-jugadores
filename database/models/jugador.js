'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jugador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Jugador.init({
    nombre: DataTypes.STRING,
    posicion: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    team: DataTypes.STRING,
    goles: DataTypes.INTEGER,
    asistencias: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jugador',
    tableName: 'Jugadores'
  });
  return Jugador;
};