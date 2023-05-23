const express = require("express");
const implementoController = require("../controllers/Implemento.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", implementoController.getImplementos);
router.post("/",authoMiddleware.isEncargado, implementoController.createImplemento);
router.get("/:id", implementoController.getImplementoById);
router.put("/:id", authoMiddleware.isEncargado, implementoController.updateImplemento);
router.delete("/:id", implementoController.deleteImplemento);

module.exports = router;
