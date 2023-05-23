const express = require("express");
const CapacitacionController = require("../controllers/Capacitacion.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", CapacitacionController.getCapacitacionById);
router.post("/", authoMiddleware.isEncargado,CapacitacionController.createCapacitacion);
router.get("/:id",CapacitacionController.updateCapacitacion);
router.delete("/:id", authoMiddleware.isEncargado,CapacitacionController.deleteCapacitacion);

module.exports = router;