"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Importa el enrutador de usuarios
const usuarioRoutes = require("./Usuario.routes");
// Importa el enrutador de autenticación
const estadoRoutes = require("./Estado.routes");
const authRoutes = require("./auth.routes.js");
// Importa el middleware de autenticación
const authMiddleware = require("../middlewares/authe.middleware.js");
const tipoRoutes = require('./tipo.routes');
const implemento = require('./Implemento.routes');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios authMiddleware.verifyToken,
router.use("/Usuario",  usuarioRoutes);
// Define las rutas para la autenticación /api/auth
router.use("/auth", authRoutes);

router.use("/Estado", estadoRoutes);
router.use('/Tipo', tipoRoutes);
router.use('/Implemento', implemento);

// Exporta el enrutador
module.exports = router;
