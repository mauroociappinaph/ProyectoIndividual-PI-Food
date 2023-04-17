//! Crea el servidor

const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes");

// Creación del servidor
const server = express(); // App

// Configuración de Miidlewords.

// Configurar rutas
server.use(morgan("dev"));
server.use(mainRouter);

// Exportación de servidor.
module.exports = server;
