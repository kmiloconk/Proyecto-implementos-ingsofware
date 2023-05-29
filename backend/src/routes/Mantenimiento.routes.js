"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Importa el controlador de  mantenimiento
const mantenimientoController = require("../controllers/Mantenimiento.controller.js");
// Importa el middleware de autorización
const authoMiddleware = require("../middlewares/autho.middleware.js");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para el mantenimiento
router.get("/", mantenimientoController.getMantenimientos);
router.post("/", authoMiddleware.isAdmin, mantenimientoController.createMantenimiento);
router.put("/:id", authoMiddleware.isAdmin, mantenimientoController.updateMantenimiento);

// Exporta el enrutador
module.exports = router;
