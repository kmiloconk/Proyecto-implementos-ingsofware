const express = require("express");
const implementoController = require("../controllers/Implementos.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", implementoController.getImplements);
router.post("/", authoMiddleware.isAdmin, implementoController.createImplement);
router.get("/:id", implementoController.getImplementById);
router.put("/:id", authoMiddleware.isAdmin, implementoController.updateImplement);
router.delete("/:id", authoMiddleware.isAdmin, implementoController.deleteImplement);

module.exports = router;