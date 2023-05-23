const express = require("express");
const usuarioController = require("../controllers/Usuario.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");

const api = express.Router();

api.get("/",  authoMiddleware.isEncargado,usuarioController.getUsuarios);
api.post("/",  authoMiddleware.isEncargado,usuarioController.createUsuario);
api.get("/:id",  authoMiddleware.isEncargado,usuarioController.getUsuarioById);
api.put("/:id", authoMiddleware.isEncargado, usuarioController.updateUsuario);
api.delete("/:id",  authoMiddleware.isEncargado,usuarioController.deleteUsuario);

module.exports = api;