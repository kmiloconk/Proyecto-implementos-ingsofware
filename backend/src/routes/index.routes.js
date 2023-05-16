"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Importa el enrutador de usuarios
const usuarioRoutes = require("./Usuario.routes");
// Importa el enrutador de autenticación
const authRoutes = require("./auth.routes.js");
// Importa el middleware de autenticación
const authMiddleware = require("../middlewares/authe.middleware.js");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use("/Usuario", authMiddleware.verifyToken, usuarioRoutes);
// Define las rutas para la autenticación /api/auth
router.use("/auth", authRoutes);

// Exporta el enrutador
module.exports = router;
