const express = require("express");
const EstadoController = require("../controllers/Estado.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", EstadoController.getEstado);
router.post("/", authoMiddleware.isAdmin, EstadoController.createEstado);
router.get("/:id", EstadoController.getEstadoById);
router.put("/:id", authoMiddleware.isAdmin, EstadoController.updateEstado);
router.delete("/:id", authoMiddleware.isAdmin, EstadoController.deleteEstado);

module.exports = router;