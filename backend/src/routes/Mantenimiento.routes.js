const express = require("express");

const mantenimientoController = require("../controllers/Mantenimiento.controller.js");
const authoMiddleware = require("../middlewares/autho.middleware.js");

const router = express.Router();

router.get("/", mantenimientoController.getMantenimientos);
router.post("/", authoMiddleware.isEncargado, mantenimientoController.createMantenimiento);
router.put("/:id", authoMiddleware.isEncargado, mantenimientoController.updateMantenimiento);

module.exports = router;
