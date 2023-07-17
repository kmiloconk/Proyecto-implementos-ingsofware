const Notificacion = require("../models/Notificacion.model");
const { notificacionBodySchema } = require("../schema/Notificacion.schema");
const Rol = require("../models/Rol.model");
const Usuario = require('../models/Usuario.model');
const { handleError } = require("../utils/errorHandler");

async function getNotificaciones() {
    try {
        return await Notificacion.find().populate('brigadista','nombre').populate({
            path: 'implemento',
            populate: {
                path: 'tipo',
                select: 'nombre',
            },
        }).populate({
            path: 'implemento',
            populate: {
                path: 'estado',
                select: 'nombre',
            },
        });
    } catch (error) {
        handleError(error, "Notificacion.service -> getNotificacion");
    }
}

async function createNotificacion(req,notificacion) {
    try {
        const { error } = notificacionBodySchema .validate(notificacion);
        if (error) return null;
        const { brigadista,implemento, descripcion} = notificacion;

        const newNotificacion = new Notificacion({
            brigadista,
            implemento,
            descripcion
        });

        console.log("Notificación creada exitosamente");
        return await newNotificacion.save();
    } catch (error) {
        handleError(error, "implemento.service -> createImplemento");
        return null;
    }
}

async function deleteNotificacion(id) {
    try {
        return await Notificacion.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "implemento.service -> deleteImplemento");
    }
}

module.exports = {
    getNotificaciones,
    createNotificacion,
    deleteNotificacion,
};