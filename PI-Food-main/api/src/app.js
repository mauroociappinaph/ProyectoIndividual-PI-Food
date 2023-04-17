//! Crea el servidor

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes");

// Creación del servidor
const server = express(); // App



server.use(cors());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

// Configurar rutas
server.use(morgan("dev"));
server.use(mainRouter);

// Exportación de servidor.
module.exports = server;
