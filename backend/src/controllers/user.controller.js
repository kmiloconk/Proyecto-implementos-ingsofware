const { respondSuccess, respondError } = require("../utils/resHandler");
const userService = require("../services/user.service");
const { handleError } = require("../utils/errorHandler");



async function getusers(req, res) {
    try {
        const users = await userService.getusers();
        users.length === 0
        ? respondSuccess(req, res, 204)
        : respondSuccess(req, res, 200, users);
    } catch (error) {
        respondError(req, res, 400, error.message);
    }
}


async function createuser(req, res) {
    try {
        const nuevouser = await userService.createuser(req.body);
        nuevouser === null
        ? respondError(
            req,
            res,
            400,
            "Error en la validacion de datos",
            "Bad Request",
            { message: "Verifique los datos ingresados" },
        )
        : respondSuccess(req, res, 201, nuevouser);
    } catch (error) {
        handleError(error, "user.controller -> createuser");
        respondError(req, res, 500, "No se pudo crear el user");
    }
}


async function getuserById(req, res) {
    try {
        const { id } = req.params;
        const user = await userService.getUsarioById(id);
        user === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el user solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, user);
    } catch (error) {
        handleError(error, "user.controller -> getuserById");
        respondError(req, res, 500, "No se pudo obtener el user");
    }
}

async function updateuser(req, res) {
    try {
        const { id } = req.params;
        const user = await userService.updateuser(id, req.body);
        user === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el user solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, user);
    } catch (error) {
        handleError(error, "user.controller -> updateuser");
        respondError(req, res, 500, "No se pudo actualizar el user");
    }
}


async function deleteuser(req, res) {
    try {
        const { id } = req.params;
        const user = await userService.deleteuser(id);
        user === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro el user solicitado",
            "Not Found",
            { message: "Verifique el id ingresado" },
        )
        : respondSuccess(req, res, 200, user);
    } catch (error) {
        handleError(error, "user.controller -> deleteuser");
        respondError(req, res, 500, "No se pudo eliminar el user");
    }
}

module.exports = {
    getusers,
    createuser,
    getuserById,
    updateuser,
    deleteuser,
};