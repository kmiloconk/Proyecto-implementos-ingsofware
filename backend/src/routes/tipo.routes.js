const express = require("express");
const tipoController = require("../controllers/tipo.controller,js");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", tipoController.getImplements);
router.post("/", authoMiddleware.isAdmin, tipoController.createImplement);
router.get("/:id", tipoController.getImplementById);
router.put("/:id", authoMiddleware.isAdmin, tipoController.updateImplement);
router.delete("/:id", authoMiddleware.isAdmin, tipoController.deleteImplement);

module.exports = router;