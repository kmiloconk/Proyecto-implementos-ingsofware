const express = require("express");
const CapacitacionController = require("../controllers/Capacitacion.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", CapacitacionController.getCapacitaciones);
router.post("/", authoMiddleware.isAdmin, CapacitacionController.createCapacitacion);
router.get("/:id", CapacitacionController.getCapacitacionById);
router.put("/:id", authoMiddleware.isAdmin, CapacitacionController.updateCapacitacion);
router.delete("/:id", authoMiddleware.isAdmin, CapacitacionController.deleteCapacitacion);

module.exports = router;
