const { respondSuccess, respondError } = require("../utils/resHandler");
const TipoService = require("../services/Tipo.service");
const { handleError } = require("../utils/errorHandler");


async function getTipos(req, res) {
  try {
    const tipos = await TipoService.getTipos();
    tipos.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, tipos);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}


async function createTipo(req, res) {
  try {
    const nuevoTipo = await TipoService.createTipo(req.body);
    nuevoTipo === null
      ? respondError(
          req,
          res,
          400,
          "Error en la validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" },
        )
      : respondSuccess(req, res, 201, nuevoTipo);
  } catch (error) {
    handleError(error, "tipo.controller -> createTipo");
    respondError(req, res, 500, "No se pudo crear el tipo");
  }
}


async function getTipoById(req, res) {
  try {
    const { id } = req.params;

    const tipo = await TipoService.getTipoById(id);
    tipo === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el tipo solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, tipo);
  } catch (error) {
    handleError(error, "tipo.controller -> getTipoById");
    respondError(req, res, 500, "No se pudo obtener el tipo");
  }
}


async function updateTipo(req, res) {
  try {
    const { id } = req.params;
    const tipo = await TipoService.updateTipo(id, req.body);
    tipo === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el tipo solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, tipo);
  } catch (error) {
    handleError(error, "tipo.controller -> updateTipo");
    respondError(req, res, 500, "No se pudo actualizar el tipo");
  }
}


async function deleteTipo(req, res) {
  try {
    const { id } = req.params;
    const tipo = await TipoService.deleteTipo(id);
    tipo === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el usuario solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, tipo);
  } catch (error) {
    handleError(error, "tipo.controller -> deleteTipo");
    respondError(req, res, 500, "No se pudo eliminar el tipo");
  }
}

module.exports = {
  getTipos,
  createTipo,
  getTipoById,
  updateTipo,
  deleteTipo,
};