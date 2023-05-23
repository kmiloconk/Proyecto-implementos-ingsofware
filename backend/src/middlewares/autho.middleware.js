// Autorizacion - Comprobar el rol del usuario
const User = require("../models/user.model.js");
const Role = require("../models/role.model.js");
const { respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler");

async function isAdmin(req, res, next) {
  try {
    const usuario = await Usuario.findOne(req.usuarioId);
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
    return respondError(req, res, 401, "Require Admin Role!");
  } catch (error) {
    handleError(error, "autho.middleware -> isAdmin");
  }
}

async function isBrigadista(req, res, next) {
  try {
    console.log(req.usuarioId);
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
