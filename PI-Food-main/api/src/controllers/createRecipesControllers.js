const axios = require("axios");
const { Recipe } = require("../db");

const dotenv = require("dotenv");
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
      ? (
          await axios.get(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
          )
        ).data
      : await Recipes.findByPk(id);
  return recipe;
};

const getRecipeByName = async (name) => {
  const infoAPI = (await axios.get(`https://api.spoonacular.com/recipes`))
    .data;

  const recipesAPI = infoCleaner(infoAPI);

  const recipeFiltered = recipesAPI.filter((recipe) => recipe.name === name);

  const recipeDb = await Recipe.findAll({ where: { name: name } });

  return [...recipeFiltered, ...recipeDb];
};

const infoCleaner = (array) => {
  return array.map((recipe) => {
    return {
      name: recipe.name,
      image: recipe.image,
      summary: recipe.summary,
      healthScore: recipe.healthScore,
      steps: recipe.steps,
      created: false,
    };
  });
};

const getAllRecipes = async () => {
  const recipesDB = await Recipe.findAll();

  const infoAPI = (await axios.get(`https://api.spoonacular.com/recipes?apiKey=${apiKey}`))
    .data;

  const recipesAPI = infoCleaner(infoAPI);

  return [...recipesDB, ...recipesAPI];
};

module.exports = {
  createRecipesDB,
  getRecipeById,
  getRecipeByName,
  getAllRecipes,
};
