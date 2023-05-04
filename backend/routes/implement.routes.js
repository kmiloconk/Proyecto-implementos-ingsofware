"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Importa el controlador de implementos
const implementoController = require("../controllers/implement.controller.js");
// Importa el middleware de autorización
const authoMiddleware = require("../middlewares/autho.middleware.js");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los implementos
router.get("/", implementoController.getImplements);
router.post("/", authoMiddleware.isAdmin, implementoController.createImplement);
router.get("/:id", implementoController.getImplementById);
router.put("/:id", authoMiddleware.isAdmin, implementoController.updateImplement);
router.delete("/:id", authoMiddleware.isAdmin, implementoController.deleteImplement);

// Exporta el enrutador
module.exports = router;
