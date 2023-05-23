const express = require("express");
const notificacionController = require("../controllers/Notificacion.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/",  authoMiddleware.isEncargado,notificacionController.getNotificaciones);
router.post("/", authoMiddleware.isBrigadista, notificacionController.createNotificacion);
router.delete("/:id",  authoMiddleware.isEncargado, notificacionController.deleteNotificacion);

module.exports = router;