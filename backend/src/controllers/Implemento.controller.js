const { respondSuccess, respondError } = require("../utils/resHandler");
const ImplementoService = require("../services/Implemento.service");
const { handleError } = require("../utils/errorHandler");


async function getImplementos(req, res) {
  try {
    const implementos = await ImplementoService.getImplementos();
    implementos.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, implementos);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}


async function createImplemento(req, res) {
  try {
    const nuevoImplemento = await ImplementoService.createImplemento(req.body);
    nuevoImplemento === null
      ? respondError(
          req,
          res,
          400,
          "Error en la validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" },
        )
      : respondSuccess(req, res, 201, nuevoImplemento);
  } catch (error) {
    handleError(error, "implemento.controller -> createImplemento");
    respondError(req, res, 500, "No se pudo crear el implemento");
  }
}


async function getImplementoById(req, res) {
  try {
    const { id } = req.params;

    const implemento = await ImplementoService.getImplementoById(id);
    if (implemento === null) {
      respondError(
        req,
        res,
        404,
        "No se encontro el implemento solicitado",
        "Not Found",
        { message: "Verifique el id ingresado" },
      );
    } else {
      const implementoConEstadoYVencimiento = {
        ...implemento,
        estado: obtenerEstadoImplemento(implemento),
        fechaVencimiento: obtenerFechaVencimientoImplemento(implemento),
      };
      respondSuccess(req, res, 200, implementoConEstadoYVencimiento);
    }
  } catch (error) {
    handleError(error, "implemento.controller -> getImplementoById");
    respondError(req, res, 500, "No se pudo obtener el implemento");
  }
}


async function updateImplemento(req, res) {
  try {
    const { id } = req.params;
    const implemento = await ImplementoService.updateImplemento(id, req.body);
    implemento === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el implemento solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, implemento);
  } catch (error) {
    handleError(error, "implemento.controller -> updateImplemento");
    respondError(req, res, 500, "No se pudo actualizar el implemento");
  }
}


async function deleteImplemento(req, res) {
  try {
    const { id } = req.params;
    const implemento = await ImplementoService.deleteImplemento(id);
    implemento === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el usuario solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, implemento);
  } catch (error) {
    handleError(error, "implemento.controller -> deleteImplemento");
    respondError(req, res, 500, "No se pudo eliminar el implemento");
  }
}

function obtenerFechaVencimientoImplemento(implemento) {
  const fechaActual = new Date();
  
  const fechaVencimiento = new Date(implemento.fechaVencimiento);
  
  if (fechaVencimiento < fechaActual) {
    return "Vencido";

  } else if (fechaVencimiento.toDateString() === fechaActual.toDateString()) {
    return "Vence hoy";

  } else {
    return "Activo";
    
  }
}

module.exports = {
  getImplementos,
  createImplemento,
  getImplementoById,
  updateImplemento,
  deleteImplemento,
};
