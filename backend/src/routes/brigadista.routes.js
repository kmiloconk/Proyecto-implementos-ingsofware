const express = require("express");

const brigadistaController = require("../controllers/brigadista.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");

const router = express.Router();

router.get("/", brigadistaController.getBrigadistas);
router.post("/", authoMiddleware.isAdmin, brigadistaController.createBrigadista);
router.get("/:id", brigadistaController.getBrigadistaById);
router.put("/:id", authoMiddleware.isAdmin, brigadistaController.updateBrigadista);
router.delete("/:id", authoMiddleware.isAdmin, brigadistaController.deleteBrigadista);

module.exports = router;
