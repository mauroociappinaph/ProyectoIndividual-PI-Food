const { Router } = require("express");

const mainRouter = Router();
const axios = require("axios");

const { Recipe, Diet } = require("../db");

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5"
  );
  const apiInfo = apiUrl.data.results.map((elemento) => {
    return {
      title: elemento.title,
      image: elemento.image,
      summary: elemento.summary,
      healthScore: elemento.healthScore,
      steps: elemento.analyzedInstructions.map((step) => step.step),
    };
  });
  return apiInfo;
};

const getDBinfo = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["id", "name"],
      as: "diets", // agregamos el alias 'diets'
    },
  });
};

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDBinfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

mainRouter.get("/recipes", async (req, res) => {
  const name = req.query.name;
  let recipesTotal = await getAllRecipes();
  if (name) {
    let recipeName = recipesTotal.filter((element) =>
      element.title.toLowerCase().includes(name.toLowerCase())
    );
    if (recipeName.length) {
      res.status(200).send(recipeName);
    } else {
      res.status(404).send("No se encontró la receta");
    }
  } else {
    res.status(200).send(recipesTotal);
  }
});

/*
mainRouter.get("/diets", async (req, res) => {
  const dietsApi = await axios.get(
    "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5"
  );
  const diets = dietsApi.data.map((elemento) => elemento.diets);
  const dieEach = diets.map((elemento) => {
    for (let i = 0; i < elemento.length; i++) return elemento[i];
  });

  dieEach.forEach((elemento) => {
    Diet.findOrCreate({
      where: { name: elemento },
    });
  });
  const allDiets = await Diet.findAll();
  res.send(allDiets);
}); */

mainRouter.post("/recipe", async (req, res) => {
  const { title, healthScore, sourceName, image, diet, createInDb, steps } =
    req.body;

  const recipeCreated = await Recipe.create({
    title,
    healthScore,
    sourceName,
    image,
    createInDb,
    steps,
  });

  const dietDB = await Diet.findAll({
    where: { name: diet },
  });
  recipeCreated.addDiet(dietDB);
  res.send("Receta creada con éxito")
});

module.exports = mainRouter;
