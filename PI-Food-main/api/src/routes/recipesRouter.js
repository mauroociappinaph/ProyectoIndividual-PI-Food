const { Router } = require("express");

const {
  getRecipesHandler,
  getRecipesIdHandler,
  createRecipesHandler,
} = require("../handlers/recipesHandlers");

const recipesRouter = Router();

recipesRouter.get("/:id", getRecipesIdHandler);
recipesRouter.get("/",  getRecipesHandler);
recipesRouter.post("/", createRecipesHandler);

module.exports = recipesRouter;
