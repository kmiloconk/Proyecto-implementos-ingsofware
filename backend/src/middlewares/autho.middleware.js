// Autorizacion - Comprobar el rol del usuario
const Usuario = require("../models/Usuario.model");
const Rol = require("../models/Rol.model");
const { respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler");

async function isEncargado(req, res, next) {
  try {
    const usuario = await Usuario.findById(req.usuarioId);
    if (!usuario) {
      return respondError(req, res, 401, "Encargado no encontrado!");
    }

    const rol = await Rol.find({ _id: { $in: usuario.rol } });
    for (let i = 0; i < rol.length; i++) {
      if (rol[i].nombre === "Encargado") {
        next();
        return;
      }
    }
    return respondError(req, res, 401, "Require Encargado Rol!");
  } catch (error) {
    handleError(error, "autho.middleware -> isEncargado");
  }
}

async function isBrigadista(req, res, next) {
  try {
    const usuario = await Usuario.findById(req.usuarioId);
    if (!usuario) {
      return respondError(req, res, 401, "Brigadista no encontrado!");
    }
    const rol = await Rol.find({ _id: { $in: usuario.rol } });
    for (let i = 0; i < rol.length; i++) {
      if (rol[i].nombre === "Brigadista") {
        next();
        return;
      }
    }
    return respondError(req, res, 401, "Require Brigadista Rol!");
  } catch (error) {
    handleError(error, "autho.middleware -> isEncargado");
  }
}

module.exports = {
  isEncargado,
  isBrigadista
};
