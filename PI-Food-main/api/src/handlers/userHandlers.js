const getUsersHandler = (req, res) => {
    res.send("NIY: Esta ruta trae la info de todos los usuarios");
  
};

const getUserHandler = (req, res) => {
  res.send("NIY: Esta ruta trae la info de un usuario determinado");
};

const createUserHandler = (req, res) => {
  res.send("NIY: Esta ruta crea un nuevo usuario");
};

moduleExports = {
  getUsersHandler,
  getUserHandler,
  createUserHandler,
};
