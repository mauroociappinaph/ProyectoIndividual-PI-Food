const getRecipesNaHandler = (req, res) => {
  console.log(name);
  const { name } = req.query;
  res.send(`Va a enviar el detalle del  ${name} del usuario`);
};


const getRecipesIdHandler = (req, res) => {
  const { id } = req.params;
  res.send(`Va a enviar el detalle del usuario de ID ${id}`);
};

const createRecipesHandler = (req, res) => {
  res.send("NIY: Esta ruta crea una nueva receta");
};

const getDietsHandler = (req, res) => {
  res.send("NIY: Esta ruta de todos los tipos de dietas")
}

module.exports = {
  getRecipesNameHandler,
  getRecipesIdHandler,
  createRecipesHandler,
  getDietsHandler,
};
