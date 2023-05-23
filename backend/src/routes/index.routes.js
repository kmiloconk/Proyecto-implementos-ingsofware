"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");


const usuarioRoutes = require("./Usuario.routes");
const estadoRoutes = require("./Estado.routes");
const authRoutes = require("./auth.routes.js");
const authMiddleware = require("../middlewares/authe.middleware.js");
const tipoRoutes = require('./tipo.routes');
const implemento = require('./Implemento.routes');
const notificacion = require('./Notificacion.routes');
//const categoria = require("./Categoria.routes");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios authMiddleware.verifyToken,
router.use("/Usuario", authMiddleware.verifyToken, usuarioRoutes);
// Define las rutas para la autenticación /api/auth
router.use("/auth", authRoutes);
router.use('/Notificacion', notificacion);
router.use("/Estado", estadoRoutes);
router.use('/Tipo', tipoRoutes);
router.use('/Implemento', implemento);
//router.use('/Categoria', categoria);


// Exporta el enrutador
module.exports = router;
