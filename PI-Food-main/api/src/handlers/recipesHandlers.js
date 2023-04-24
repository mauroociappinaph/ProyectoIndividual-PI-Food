const {
  createRecipesDB,
  getRecipeById,
  getRecipeByName,
  getAllRecipes,
  
} = require("../controllers/createRecipesControllers");

const getRecipesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if(name) {
      const recipeByName = await getRecipeByName(name)
      res.status(200).json(recipeByName)
    } else {
      const response = await getAllRecipes()
      res.status(200).json(response)
    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }




  res.send(`Va a enviar el detalle del  ${name} de los usuarios o todos los usuarios`);
};

const getRecipesIdHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";

  try {
    const response = await getRecipeById(id, source);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const createRecipesHandler = async (req, res) => {
  const { name, image, summary, healthScore, steps } = req.body;
  try {
    const response = await createRecipesDB(
      name,
      image,
      summary,
      healthScore,
      steps
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.send(
    `Esta ruta crea una nueva receta: ${name} , ${image}, ${summary} , ${healthScore} , ${steps}`
  );
};

const getDietsHandler = (req, res) => {
  res.send("NIY: Esta ruta de todos los tipos de dietas");
};

module.exports = {
  getRecipesHandler,
  getRecipesIdHandler,
  getRecipeByName,
  createRecipesHandler,
  getDietsHandler,
};

//! Handler extraer la información del endpoint y despues invocar un conroller.
