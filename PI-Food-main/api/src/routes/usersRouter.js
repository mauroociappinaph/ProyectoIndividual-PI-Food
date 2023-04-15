const { Router } = require('express');

const usersRouter = Router();

const getUsersHandler = (req , res) => {
    // llamar a la función que obtiene los datos de la BDD
    //llamar una funcion que obtenga los datos de la API externa
    //Unir los datos , unificando el formato 
    //Cuando tenga los datos, responder con los datos
}

const getUserHandler = (req , res) => {
res.send ("NIY: Esta ruta trae la info de un usuario determinado")

} 
usersRouter.get ("/", getUsersHandler);

usersRouter.get ("/:id", getUserHandler);

const createUserHandler = () => {

}

