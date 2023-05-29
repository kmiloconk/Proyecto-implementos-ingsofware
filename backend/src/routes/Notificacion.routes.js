const express = require("express");
const notificacionController = require("../controllers/Notificacion.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", notificacionController.getNotificaciones);
router.post("/", notificacionController.createNotificacion);
router.delete("/:id", notificacionController.deleteNotificacion);

module.exports = router;