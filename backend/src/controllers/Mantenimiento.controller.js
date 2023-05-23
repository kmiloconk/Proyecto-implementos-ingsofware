const { respondSuccess, respondError } = require("../utils/resHandler");
const MantenimientoService = require("../services/Mantenimiento.service.js");
const { handleError } = require("../utils/errorHandler");

async function getMantenimientos(req, res) {
  try {
    const mantenimientos = await MantenimientoService.getMantenimientos();
    mantenimientos.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, mantenimientos);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}


async function createMantenimiento(req, res) {
  try {
    const nuevoMantenimiento = await MantenimientoService.createMantenimiento(req.body);
    nuevoMantenimiento === null
      ? respondError(
          req,
          res,
          400,
          "Error en la validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" },
        )
      : respondSuccess(req, res, 201, nuevoMantenimiento);
  } catch (error) {
    handleError(error, "mantenimiento.controller -> createMantenimiento");
    respondError(req, res, 500, "No se pudo crear el mantenimiento");
  }
}


async function updateMantenimiento(req, res) {
  try {
    const { id } = req.params;
    const mantenimiento = await MantenimientoService.updateMantenimiento(id, req.body);
    mantenimiento === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el mantenimiento solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, mantenimiento);
  } catch (error) {
    handleError(error, "mantenimiento.controller -> updateMantenimiento");
    respondError(req, res, 500, "No se pudo actualizar el mantenimiento");
  }
}


module.exports = {
  getMantenimientos,
  createMantenimiento,
  updateMantenimiento,
};
