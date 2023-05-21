const Notificacion = require("../models/Notificacion.model");
const { handleError } = require("../utils/errorHandler");

async function getNotificaciones() {
    try {
        return await Notificacion.find(),populate('brigadista'),populate('implemento');
    } catch (error) {
        handleError(error, "Notificacion.service -> getNotificacion");
    }
}

async function createNotificacion(notificacion) {
    try {
    const { brigadista, implemento, descripcion, fechaCreacion} = notificacion;

    const newNotificacion = new Notificacion({ brigadista, implemento, descripcion, fechaCreacion });
    return await newNotificacion.save();
    } catch (error) {
        handleError(error, "implemento.service -> createImplemento");
    }
}

async function deleteNotificacion(id) {
    try {
        return await Implemento.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "implemento.service -> deleteImplemento");
    }
}

module.exports = {
    getNotificaciones,
    createNotificacion,
    deleteNotificacion,
};