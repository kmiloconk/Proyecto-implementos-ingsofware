
const { respondSuccess, respondError } = require("../utils/resHandler");
const EstadoService = require("../services/Estado.service");
const { handleError } = require("../utils/errorHandler");


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


async function createEstado(req, res) {
  try {
    console.log(req.body);
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
      : respondSuccess(req, res, 200);
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
