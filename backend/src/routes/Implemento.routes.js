const express = require("express");
const implementoController = require("../controllers/Implemento.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", implementoController.getImplementos);
router.post("/", authoMiddleware.isAdmin, implementoController.createImplemento);
router.get("/:id", implementoController.getImplementoById);
router.put("/:id", authoMiddleware.isAdmin, implementoController.updateImplemento);
router.delete("/:id", authoMiddleware.isAdmin, implementoController.deleteImplemento);

module.exports = router;
