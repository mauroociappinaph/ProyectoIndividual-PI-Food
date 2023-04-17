const { Router } = require("express");

const {
  getRecipesNameHandler,
  getRecipesIdHandler,
  createRecipesHandler,
} = require("../handlers/recipesHandlers");

const recipesRouter = Router();

recipesRouter.get("/:id", getRecipesIdHandler);
recipesRouter.get("/", getRecipesNameHandler);
recipesRouter.post("/", createRecipesHandler);

module.exports = recipesRouter;
