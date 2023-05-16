// Autorizacion - Comprobar el rol del usuario
const Usuario = require("../models/Usuario.model");
const Rol = require("../models/Rol.model");
const { respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler");

async function isEncargado(req, res, next) {
  try {
    const usuario = await Usuario.findById(req.usuarioId);
    const roles = await Rol.find({ _id: { $in: usuario.roles } });
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "Encargado") {
        next();
        return;
      }
    }
    return respondError(req, res, 401, "Require Encargado Rol!");
  } catch (error) {
    handleError(error, "autho.middleware -> isEncargado");
  }
}

module.exports = {
  isEncargado,
};
