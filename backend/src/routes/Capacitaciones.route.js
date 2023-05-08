const express = require("express");
const CapacitacionesController = require("../controllers/Capacitaciones.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", CapacitacionesController.getCapacitaciones);
router.post("/", authoMiddleware.isAdmin, CapacitacionesController.createCapacitacion);
router.get("/:id", CapacitacionesController.getCapacitacionById);
router.put("/:id", authoMiddleware.isAdmin, CapacitacionesController.updateCapacitacion);
router.delete("/:id", authoMiddleware.isAdmin, CapacitacionesController.deleteCapacitacion);

module.exports = router;