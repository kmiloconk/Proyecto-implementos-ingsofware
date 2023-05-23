const Usuario = require("../models/Usuario.model");
const Rol = require("../models/Rol.model");
const Implemento = require("../models/Implemento.model");
const Capacitacion = require("../models/Capacitacion.model");
const { handleError } = require("../utils/errorHandler");
const { usuarioBodySchema } = require("../schema/Usuario.schema");


async function getUsuarios() {

    try {
        return await Usuario.find().populate('rol').populate({
            path: 'implemento',
            populate: {
                path: 'tipo',
                select: 'nombre',
            },
        });
    } catch (error) {
        handleError(error, "Usuario.service -> getUsuarios");
    }
}

async function createUsuario(usuario) {
    try {
        const { error } = usuarioBodySchema.validate(usuario);
        if (error) return null;
        const { nombre, email, implemento, capacitacion, rol } = usuario;

        const usuarioFound = await Usuario.findOne({ email: usuario.email });
        if (usuarioFound) return null;

        const newUsuario = new Usuario({ nombre, email, implemento, capacitacion, rol});
        return await newUsuario.save();
    } catch (error) {
    handleError(error, "Usuario.service -> createUsuario");
    }
}


async function getUsuarioById(id) {
    try {
        return await Usuario.findById({ _id: id });
    } catch (error) {
        handleError(error, "Usuario.service -> getUsuarioById");
    }
}


async function updateUsuario(id, usuario) {
    try {
        const { error } = usuarioBodySchema.validate(usuario);
        if (error) return null;

        return await Usuario.findByIdAndUpdate(id, usuario);
    } catch (error) {
        handleError(error, "Usuario.service -> updateUsuario");
    }
}

async function deleteUsuario(id) {
    try {
        return await Usuario.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "Usuario.service -> deleteUsuario");
    }
}

module.exports = {
    getUsuarios,
    createUsuario,
    getUsuarioById,
    updateUsuario,
    deleteUsuario,
};
