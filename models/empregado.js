'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empregado = sequelize.define('Empregado', {
    id: DataTypes.INTEGER,
    idade: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    cargo: DataTypes.STRING
  }, {});
  Empregado.associate = function(models) {
 
  };
  return Empregado;
};