const { respondSuccess, respondError } = require("../utils/resHandler");
const EncargadoService = require("../services/Encargado.service");
const { handleError } = require("../utils/errorHandler");

async function getEncargados(req, res) {
    try {
        const Encargados = await EncargadoService.getEncargados();
        Encargados.length === 0
        ? respondSuccess(req, res, 204)
        : respondSuccess(req, res, 200, Encargados);
    } catch (error) {
        respondError(req, res, 400, error.message);
    }
}


async function createEncargado(req, res) {
    try {
        const nuevoEncargado = await EncargadoService.createEncargado(req.body);
        nuevoEncargado === null
        ? respondError(
            req,
            res,
            400,
            "Error en la validacion de datos",
            "Bad Request",
            { message: "Verifique los datos ingresados" },
        )
        : respondSuccess(req, res, 201, nuevoEncargado);
    } catch (error) {
        handleError(error, "Encargado.controller -> createEncargado");
        respondError(req, res, 500, "No se pudo crear al Encargado");
    }
}


async function getEncargadoById(req, res) {
    try {
        const { id } = req.params;
        const Encargado = await EncargadoService.getEncargadoById(id);
        Encargado === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el Encargado solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, user);
    } catch (error) {
        handleError(error, "user.controller -> getUserById");
        respondError(req, res, 500, "No se pudo obtener al Encargado");
    }
}

async function updateEncargado(req, res) {
    try {
        const { id } = req.params;
        const Encargado = await EncargadoService.updateEncargado(id, req.body);
        Encargado === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el Encargado solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, Encargado);
    } catch (error) {
        handleError(error, "Encargado.controller -> updateEncargado");
        respondError(req, res, 500, "No se pudo actualizar al Encargado");
    }
}

async function deleteEncargado(req, res) {
    try {
        const { id } = req.params;
        const Encargado = await EncargadoService.deleteEncargado(id);
        Encargado === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el Encargado solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, user);
    } catch (error) {
        handleError(error, "Encargado.controller -> deleteEncargado");
        respondError(req, res, 500, "No se pudo eliminar al Encargado");
    }
}

module.exports = {
    getEncargados,
    createEncargado,
    getEncargadoById,
    updateEncargado,
    deleteEncargado,
};