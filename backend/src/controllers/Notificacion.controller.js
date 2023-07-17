const { respondSuccess, respondError } = require("../utils/resHandler");
const NotificacionService = require("../services/Notificacion.service");
const { handleError } = require("../utils/errorHandler");


async function getNotificaciones(req, res) {
    try {
        const notificaciones = await NotificacionService.getNotificaciones();
        notificaciones.length === 0
        ? respondSuccess(req, res, 204)
        : respondSuccess(req, res, 200, notificaciones);
    } catch (error) {
        respondError(req, res, 400, error.message);
    }
}


async function createNotificacion(req, res) {
    try {
        const nuevoNotificacion = await NotificacionService.createNotificacion(req.body);
        nuevoNotificacion === null
        ? respondError(
            req,
            res,
            400,
            "Error en la validacion de datos",
            "Bad Request",
            { message: "Verifique los datos ingresados" },
        )
        : respondSuccess(req, res, 201, nuevoNotificacion);
    } catch (error) {
        handleError(error, "notificacion.controller -> createNotificacion");
        respondError(req, res, 500, "No se pudo crear la notificacion");
    }
}


async function deleteNotificacion(req, res) {
    try {
        const { id } = req.params;
        const notificacion = await NotificacionService.deleteNotificacion(id);
        notificacion === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el usuario solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, notificacion);
    } catch (error) {
        handleError(error, "Notificacion.controller -> deleteNotificacion");
        respondError(req, res, 500, "No se pudo eliminar la notificacion");
    }
}

module.exports = {
    getNotificaciones,
    createNotificacion,
    deleteNotificacion,
};