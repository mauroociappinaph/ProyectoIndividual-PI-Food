const axios = require("axios");
const { Recipe } = require("../db");

const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.API_KEY;


const createRecipesDB = async (name, image, summary, healthScore, steps) => {
  return await Recipe.create({
    name,
    image,
    summary,
    healthScore,
    steps,
  });
};

const getRecipeById = async (id, source) => {
  const recipe =
  source === "api"
    ? (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`))               
        .data
    : await food.findByPk(id);
return recipe;

};

module.exports = {
  createRecipesDB,
  getRecipeById,
};
