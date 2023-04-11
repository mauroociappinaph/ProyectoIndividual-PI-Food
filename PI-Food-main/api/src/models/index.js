// Cada modelo se define como una clase que extiende la clase Model de Sequelize, y se relaciona con otros modelos mediante las funciones de asociación de Sequelize.
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://usuario:password@localhost:5432/food');

class Receta extends Sequelize.Model {}

Receta.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Nombre: { type: DataTypes.STRING(25), allowNull: false, unique: true },
  Imagen: { type: DataTypes.STRING(255), allowNull: false },
  ResumenDelPlato: { type: DataTypes.TEXT, allowNull: false },
  HealthScore: { type: DataTypes.FLOAT, allowNull: false },
  Pasos: { type: DataTypes.TEXT, allowNull: false },
}, { sequelize, modelName: 'receta' });

module.exports = { Receta };

