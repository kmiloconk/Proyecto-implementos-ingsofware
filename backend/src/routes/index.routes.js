const express = require("express");


const usuarioRoutes = require("./Usuario.routes");
const estadoRoutes = require("./Estado.routes");
const mantenimientoRoutes = require("./mantenimiento.routes.js");
const authRoutes = require("./auth.routes.js");
const authMiddleware = require("../middlewares/authe.middleware.js");
const tipoRoutes = require('./tipo.routes');
const implemento = require('./Implemento.routes');
const notificacion = require('./Notificacion.routes');
const categoria = require("./Categoria.routes");
const capacitaciones = require('./Capacitacion.routes');

const router = express.Router();

router.use("/Usuario", authMiddleware.verifyToken, usuarioRoutes);
router.use("/auth", authRoutes);
router.use('/Notificacion',authMiddleware.verifyToken, notificacion);
router.use("/Estado",authMiddleware.verifyToken, estadoRoutes);
router.use('/Tipo', authMiddleware.verifyToken,tipoRoutes);
router.use('/Implemento',authMiddleware.verifyToken, implemento);
router.use('/Categoria', authMiddleware.verifyToken,categoria);
router.use("/Mantenimiento", authMiddleware.verifyToken, mantenimientoRoutes);
router.use('/Capacitacion', authMiddleware.verifyToken, capacitaciones);

module.exports = router;
