const { Sequelize} = require('sequelize');
require("dotenv").config();

//Extraigo los Modelos 
const RecipeModule = require("./models/RecipeModel")
const DietModule = require("./models/DietModel")

//Traigo info de .env
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// Info de Postgres
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false }
); 


//Definir de modelos  a Usar 
RecipeModule(sequelize); 
DietModule(sequelize); 

//Crear relaciones y asociaciones 
const {Recipe , Diet} = sequelize.models

Recipe.belongsToMany(Diet, {
    through: `Recipes_Diets`,
    as: "diets",
    timestamps: false,
  });
  Diet.belongsToMany(Recipe, {
    through: `Recipes_Diets`,
    as: "recipes",
    timestamps: false,
  });


module.exports = { 
    ...sequelize.models,
    conn: sequelize };
