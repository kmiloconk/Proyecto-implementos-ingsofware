const express = require("express");
const usuarioController = require("../controllers/Usuario.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");

const router = express.Router();

router.get("/", usuarioController.getUsuarios);
router.post("/", authoMiddleware.isEncargado, usuarioController.createUsuario);
router.get("/:id", usuarioController.getUsuarioById);
router.put("/:id", authoMiddleware.isEncargado, usuarioController.updateUsuario);
router.delete("/:id", authoMiddleware.isEncargado, usuarioController.deleteUsuario);

module.exports = router;