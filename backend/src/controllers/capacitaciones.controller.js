"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
//const UserService = require("../services/user.service");
const { handleError } = require("../utils/errorHandler");


async function getCapacitaciones(req, res) {
  try {
    const capacitaciones = await CapacitacionesService.getCapacitaciones();
    capacitaciones.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, capacitaciones);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}


async function createCapacitacion(req, res) {
  try {
    const nuevaCapacitacion = await CapacitacionService.createCapacitacion(req.body);
    nuevaCapacitacion === null
      ? respondError(
          req,
          res,
          400,
          "Error en la validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" },
        )
      : respondSuccess(req, res, 201, nuevaCapacitacion);
  } catch (error) {
    handleError(error, "capacitaciones.controller -> createCapacitacion");
    respondError(req, res, 500, "No se pudo crear la capacitación");
  }
}


async function getCapacitacionById(req, res) {
  try {
    const { id } = req.params;

    const capacitacion = await capacitacionService.getCapacitacionById(id);
    capacitacion === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro la capacitacion solicitada",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(error, "capacitacion.controller -> getCapacitacionById");
    respondError(req, res, 500, "No se pudo obtener la capacitacion");
  }
}


async function updateCapacitacion(req, res) {
  try {
    const { id } = req.params;
    const capacitacion = await CapacitacionService.updateCapacitacion(id, req.body);
    capacitacion === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro la capacitacion solicitada",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(error, "capacitaciones.controller -> updateCapacitacion");
    respondError(req, res, 500, "No se pudo actualizar la capacitacion");
  }
}


async function deleteCapacitacion(req, res) {
  try {
    const { id } = req.params;
    const capacitacion = await CapacitacionService.deleteCapacitacion(id);
    capacitacion === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro la capacitacion solicitada",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(error, "capacitaciones.controller -> deleteCapacitacion");
    respondError(req, res, 500, "No se pudo eliminar la capacitacion");
  }
}

module.exports = {
  getCapacitaciones,
  createCapacitacion,
  getCapacitacionById,
  updateCapacitacion,
  deleteCapacitacion,
};