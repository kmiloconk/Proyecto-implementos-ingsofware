const { respondSuccess, respondError } = require("../utils/resHandler");
const UsuarioService = require("../services/Usuario.service");
const { handleError } = require("../utils/errorHandler");


async function getUsuarios(req, res) {
    try {
        const usuarios = await UsuarioService.getUsuarios();
        usuarios.length === 0
        ? respondSuccess(req, res, 204)
        : respondSuccess(req, res, 200, usuarios);
    } catch (error) {
        respondError(req, res, 400, error.message);
    }
}


async function createUsuario(req, res) {
    try {
        const nuevoUsuario = await UsuarioService.createUsuario(req.body);
        nuevoUsuario === null
        ? respondError(
            req,
            res,
            400,
            "Error en la validacion de datos",
            "Bad Request",
            { message: "Verifique los datos ingresados" },
        )
        : respondSuccess(req, res, 201, nuevoUsuario);
    } catch (error) {
        handleError(error, "Usuario.controller -> createUsuario");
        respondError(req, res, 500, "No se pudo crear el usuario");
    }
}


async function getUsuarioById(req, res) {
    try {
        const { id } = req.params;
        const usuario = await UsuarioService.getUsarioById(id);
        usuario === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el usuario solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, usuario);
    } catch (error) {
        handleError(error, "Usuario.controller -> getUsuarioById");
        respondError(req, res, 500, "No se pudo obtener el usuario");
    }
}

async function updateUsuario(req, res) {
    try {
        const { id } = req.params;
        const usuario = await UsuarioService.updateUsuario(id, req.body);
        usuario === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el usuario solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, usuario);
    } catch (error) {
        handleError(error, "Usuario.controller -> updateUsuario");
        respondError(req, res, 500, "No se pudo actualizar el usuario");
    }
}


async function deleteUsuario(req, res) {
    try {
        const { id } = req.params;
        const usuario = await UsuarioService.deleteUsuario(id);
        usuario === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el usuario solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, usuario);
    } catch (error) {
        handleError(error, "Usuario.controller -> deleteUsuario");
        respondError(req, res, 500, "No se pudo eliminar el usuario");
    }
}

module.exports = {
    getUsuarios,
    createUsuario,
    getUsuarioById,
    updateUsuario,
    deleteUsuario,
};