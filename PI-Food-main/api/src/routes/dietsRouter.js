const { Router } = require("express");
const   dietsHandler = require("../handlers/dietsHandler")

const dietsRouter = Router();


recipesRouter.get("/diets", dietsHandler);

module.exports = dietsRouter;
