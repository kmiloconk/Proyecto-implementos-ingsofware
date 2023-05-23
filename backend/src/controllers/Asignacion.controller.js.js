const { respondSuccess, respondError } = require("../utils/resHandler");
const AsignacionService = require("../services/Asignacion.service.js");
const { handleError } = require("../utils/errorHandler");

async function getAsignacion(req, res) {
  try {
    const Asignacion = await AsignacionService.getAsignacion();
    Asignacion.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, Asignacion);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}

async function createAsignacion(req, res) {
  try {
    const nuevaAsignacion = await AsignacionService.createAsignacion(req.body);
    nuevaAsignacion === null
      ? respondError(
          req,
          res,
          400,
          "Error en la validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" },
        )
      : respondSuccess(req, res, 201, nuevaAsignacion);
  } catch (error) {
    handleError(error, "Asignacion.controller -> createAsignacion");
    respondError(req, res, 500, "No se pudo crear la Asignacion");
  }
}

async function updateAsignacion(req, res) {
  try {
    const { id } = req.params;
    const Asignacion = await AsignacionService.updateAsignacion(id, req.body);
    Asignacion === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro la Asignacion solicitada",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, Asignacion);
  } catch (error) {
    handleError(error, "Asignacion.controller -> updateAsignacion");
    respondError(req, res, 500, "No se pudo actualizar la Asignacion");
  }
}

async function deleteAsignacion(req, res) {
    try {
      const { id } = req.params;
      const Asignacion = await AsignacionService.deleteAsignacion(id);
      Asignacion === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro la asignacion solicitada",
            "Not Found",
            { message: "Verifique el id ingresado" },
          )
        : respondSuccess(req, res, 200, Asignacion);
    } catch (error) {
      handleError(error, "Asignacion.controller -> deleteAsignacion");
      respondError(req, res, 500, "No se pudo eliminar la Asignacion");
    }
  }

module.exports = {
  getAsignacion,
  createAsignacion,
  updateAsignacion,
  deleteAsignacion,
};