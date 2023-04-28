"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const ImplementService = require("../services/implement.service");
const { handleError } = require("../utils/errorHandler");

/**
 * @name getImplements
 * @description Obtiene todos los implementos
 * @param req {Request}
 * @param res {Response}
 */
async function getImplements(req, res) {
  try {
    const implementos = await ImplementService.getImplements();
    implementos.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, implementos);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}

/**
 * @name createImplement
 * @description Crea un nuevo implemento
 * @param req {Request}
 * @param res {Response}
 */
async function createImplement(req, res) {
  try {
    const nuevoImplement = await ImplementService.createImplement(req.body);
    nuevoImplement === null
      ? respondError(
          req,
          res,
          400,
          "Error en la validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" },
        )
      : respondSuccess(req, res, 201, nuevoImplement);
  } catch (error) {
    handleError(error, "implement.controller -> createImplement");
    respondError(req, res, 500, "No se pudo crear el implemento");
  }
}

/**
 * @name getImplementById
 * @description Obtiene un implemento por su id
 * @param req {Request}
 * @param res {Response}
 */
async function getImplementById(req, res) {
  try {
    const { id } = req.params;

    const implement = await ImplementService.getImplementById(id);
    implement === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el implemento solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, implement);
  } catch (error) {
    handleError(error, "implement.controller -> getImplementById");
    respondError(req, res, 500, "No se pudo obtener el implemento");
  }
}

/**
 * @name updateImplement
 * @description Actualiza un implemento por su id
 * @param req {Request}
 * @param res {Response}
 */
async function updateImplement(req, res) {
  try {
    const { id } = req.params;
    const implement = await ImplementService.updateImplement(id, req.body);
    implement === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el implemento solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, implement);
  } catch (error) {
    handleError(error, "implement.controller -> updateImplement");
    respondError(req, res, 500, "No se pudo actualizar el implemento");
  }
}

/**
 * @name deleteImplement
 * @description Elimina un implemento por su id
 * @param req {Request}
 * @param res {Response}
 */
async function deleteImplement(req, res) {
  try {
    const { id } = req.params;
    const implement = await ImplementService.deleteImplement(id);
    implement === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el usuario solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, implement);
  } catch (error) {
    handleError(error, "implement.controller -> deleteImplement");
    respondError(req, res, 500, "No se pudo eliminar el implemento");
  }
}

module.exports = {
  getImplements,
  createImplement,
  getImplementById,
  updateImplement,
  deleteImplement,
};
