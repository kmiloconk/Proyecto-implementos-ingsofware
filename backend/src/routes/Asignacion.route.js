"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Importa el controlador de  Asignacion
const AsignacionController = require("../controllers/Asignacion.controller.js");
// Importa el middleware de autorización
const authoMiddleware = require("../middlewares/autho.middleware.js");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para el Asignacion
router.get("/", AsignacionController.getAsignacion);
router.post("/", authoMiddleware.isAdmin, AsignacionController.createAsignacion);
router.put("/:id", authoMiddleware.isAdmin, AsignacionController.updateAsignacion);
router.delete("/:id", authoMiddleware.isAdmin, AsignacionController.deleteAsignacion);

// Exporta el enrutador
module.exports = router;