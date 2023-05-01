const { respondSuccess, respondError } = require("../utils/resHandler");
const BrigadistaService = require("../services/brigadista.service");
const { handleError } = require("../utils/errorHandler");

async function getBrigadistas(req, res) {
    try {
        const brigadistas = await BrigadistaService.getBrigadistas();
        brigadistas.length === 0
        ? respondSuccess(req, res, 204)
        : respondSuccess(req, res, 200, brigadistas);
    } catch (error) {
        respondError(req, res, 400, error.message);
    }
}


async function createBrigadista(req, res) {
    try {
        const nuevoBrigadista = await BrigadistaService.createBrigadista(req.body);
        nuevoBrigadista === null
        ? respondError(
            req,
            res,
            400,
            "Error en la validacion de datos",
            "Bad Request",
            { message: "Verifique los datos ingresados" },
        )
        : respondSuccess(req, res, 201, nuevoBrigadista);
    } catch (error) {
        handleError(error, "brigadista.controller -> createBrigadista");
        respondError(req, res, 500, "No se pudo crear al Brigadista");
    }
}


async function getBrigadistaById(req, res) {
    try {
        const { id } = req.params;
        const brigadista = await BrigadistaService.getBrigadistaById(id);
        brigadista === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el brigadista solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, user);
    } catch (error) {
        handleError(error, "user.controller -> getUserById");
        respondError(req, res, 500, "No se pudo obtener al brigadista");
    }
}

async function updateBrigadista(req, res) {
    try {
        const { id } = req.params;
        const brigadista = await BrigadistaService.updateBrigadista(id, req.body);
        brigadista === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el brigadista solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, brigadista);
    } catch (error) {
        handleError(error, "brigadista.controller -> updateBrigadista");
        respondError(req, res, 500, "No se pudo actualizar al brigadista");
    }
}

async function deleteBrigadista(req, res) {
    try {
        const { id } = req.params;
        const brigadista = await BrigadistaService.deleteBrigadista(id);
        brigadista === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el brigadista solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, user);
    } catch (error) {
        handleError(error, "brigadista.controller -> deleteBrigadista");
        respondError(req, res, 500, "No se pudo eliminar al brigadista");
    }
}

module.exports = {
    getBrigadistas,
    createBrigadista,
    getBrigadistaById,
    updateBrigadista,
    deleteBrigadista,
};