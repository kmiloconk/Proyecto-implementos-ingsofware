const express = require("express");
const categoriaController = require("../controllers/Categoria.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", categoriaController.getImplements);
router.post("/", authoMiddleware.isAdmin, categoriaController.createImplement);
router.get("/:id", categoriaController.getImplementById);
router.put("/:id", authoMiddleware.isAdmin, categoriaController.updateImplement);
router.delete("/:id", authoMiddleware.isAdmin, categoriaController.deleteImplement);

module.exports = router;