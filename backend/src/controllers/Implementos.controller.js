"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
//const UserService = require("../services/user.service");
const { handleError } = require("../utils/errorHandler");

/**
 * @name getImplementos
 * @description Obtiene todas las Implementos
 * @param req {Request}
 * @param res {Response}
 */
async function getImplementos(req, res) {
  try {
    const Implementos = await CapacitacionesService.getImplementos();
    Implementos.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, Implementos);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}

/**
 * @name createImplementos
 * @description Crea un nuevo Implemento
 * @param req {Request}
 * @param res {Response}
 */
async function createImplementos(req, res) {
  try {
    const nuevoImplemento = await implementosService.createImplementos(req.body);
    nuevoImplemento === null
      ? respondError(
          req,
          res,
          400,
          "Error en el validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" },
        )
      : respondSuccess(req, res, 201, nuevoImplemento);
  } catch (error) {
    handleError(error, "Implementos.controller -> createImplementos");
    respondError(req, res, 500, "No se pudo crear el capacitación");
  }
}

/**
 * @name getImplementosById
 * @description Obtiene un Implemento por su id
 * @param req {Request}
 * @param res {Response}
 */
async function getImplementosById(req, res) {
  try {
    const { id } = req.params;

    const Implemento = await implementosService.getImplementosById(id);
    Implemento === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el Implemento solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(error, "Implemento.controller -> getImplementos");
    respondError(req, res, 500, "No se pudo obtener el Implemento");
  }
}

/**
 * @name updateImplementos
 * @description Actualiza un Implemento por su id
 * @param req {Request}
 * @param res {Response}
 */
async function updateImplementos(req, res) {
  try {
    const { id } = req.params;
    const Implemento = await implementosService.updateImplementos(id, req.body);
    Implemento === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el Implemento solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(error, "Implementos.controller -> updateImplementos");
    respondError(req, res, 500, "No se pudo actualizar el Implemento");
  }
}

/**
 * @name deleteImplementos
 * @description Elimina un Implemento por su id
 * @param req {Request}
 * @param res {Response}
 */
async function deleteImplementos(req, res) {
  try {
    const { id } = req.params;
    const Implemento = await implementosService.deleteImplementos(id);
    Implemento === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el Implemento solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(error, "Implementos.controller -> deleteImplementos");
    respondError(req, res, 500, "No se pudo eliminar el Implemento");
  }
}

module.exports = {
  getImplementos,
  createImplementos,
  getImplementosById,
  updateImplementos,
  deleteImplementos,
};