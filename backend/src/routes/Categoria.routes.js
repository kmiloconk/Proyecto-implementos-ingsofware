const express = require("express");
const categoriaController = require("../controllers/Categoria.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", categoriaController.getCategorias);
router.post("/", authoMiddleware.isEncargado, categoriaController.createCategoria);
router.get("/:id", categoriaController.getCategoriaById);
router.put("/:id", authoMiddleware.isEncargado, categoriaController.updateCategoria);
router.delete("/:id", authoMiddleware.isEncargado, categoriaController.deleteCategoria);

module.exports = router;