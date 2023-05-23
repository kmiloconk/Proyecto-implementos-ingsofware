const express = require("express");
const EstadoController = require("../controllers/Estado.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", EstadoController.getEstado);
router.post("/",EstadoController.createEstado);
router.get("/:id", EstadoController.getEstadoById);
router.put("/:id", authoMiddleware.isEncargado, EstadoController.updateEstado);
router.delete("/:id", EstadoController.deleteEstado);

module.exports = router;