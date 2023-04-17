const { Router } = require("express");
const recipesRouter = require("./recipesRouter");
const dietsRouter = require("./dietsRouter");

const mainRouter = Router();

mainRouter.use("/recipes", recipesRouter);
mainRouter.use("/diets", dietsRouter);

mainRouter.get("/", (req, res) => {
    res.send("Hola, este es el servidor de recetas");
  });

module.exports = mainRouter;
