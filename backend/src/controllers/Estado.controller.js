"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
//  const UserService = require("../services/user.service");
const { handleError } = require("../utils/errorHandler");

/**
 * @name getEstado
 * @description Obtiene todos los Estados
 * @param req {Request}
 * @param res {Response}
 */
async function getEstado(req, res) {
  try {
    const Estado = await EstadoService.getEstado();
    Estado.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, Estado);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}

/**
 * @name createEstado
 * @description Crea un nuevo estado
 * @param req {Request}
 * @param res {Response}
 */
async function createEstado(req, res) {
  try {
    const nuevoEstado = await EstadoService.createEstado(req.body);
    nuevoEstado === null
      ? respondError(
          req,
          res,
          400,
          "Error en la validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" },
        )
      : respondSuccess(req, res, 201, nuevoEstado);
  } catch (error) {
    handleError(error, "Estado.controller -> createEstado");
    respondError(req, res, 500, "No se pudo crear el estado");
  }
}

/**
 * @name getEstadoById
 * @description Obtiene un estado por su id
 * @param req {Request}
 * @param res {Response}
 */
async function getEstadoById(req, res) {
  try {
    const { id } = req.params;

    const estado = await estadoService.getEstadoById(id);
    estado === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el estado solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(error, "estado.controller -> getEstadoById");
    respondError(req, res, 500, "No se pudo obtener el estado");
  }
}

/**
 * @name updateEstado
 * @description Actualiza un estado por su id
 * @param req {Request}
 * @param res {Response}
 */
async function updateEstado(req, res) {
  try {
    const { id } = req.params;
    const estado = await EstadoService.updateEstado(id, req.body);
    estado === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el estado solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(error, "Estado.controller -> updateEstado");
    respondError(req, res, 500, "No se pudo actualizar el estado");
  }
}

/**
 * @name deleteEstado
 * @description Elimina un estado por su id
 * @param req {Request}
 * @param res {Response}
 */
async function deleteEstado(req, res) {
  try {
    const { id } = req.params;
    const estado = await EstadoService.deleteEstado(id);
    estado === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el estado solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(error, "Estado.controller -> deleteEstado");
    respondError(req, res, 500, "No se pudo eliminar el estado");
  }
}

module.exports = {
  getEstado,
  createEstado,
  getEstadoById,
  updateEstado,
  deleteEstado,
};
