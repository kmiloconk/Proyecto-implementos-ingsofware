const express = require("express");

const tipoController = require("../controllers/tipo.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", tipoController.getTipos);
router.post("/", authoMiddleware.isEncargado, tipoController.createTipo);
router.get("/:id", tipoController.getTipoById);
router.put("/:id", authoMiddleware.isEncargado, tipoController.updateTipo);
router.delete("/:id", tipoController.deleteTipo);

module.exports = router;
