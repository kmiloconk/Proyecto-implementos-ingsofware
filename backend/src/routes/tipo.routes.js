const express = require("express");

const tipoController = require("../controllers/tipo.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", tipoController.getTipos);
router.post("/", tipoController.createTipo);
router.get("/:id", tipoController.getTipoById);
//router.put("/:id", authoMiddleware.isAdmin, tipoController.updateTipo);
router.delete("/:id", tipoController.deleteTipo);

module.exports = router;
