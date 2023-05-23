const Joi = require("joi");

const FechaAsignacion = Joi.string().min(3).max(30).required();
const TiposModAsignacion = Joi.array()
  .min(1)
  .items(Joi.string().valid("Asignacion", "Modificacion", "Eliminacion"));

const Usuario = Joi.string().min(3).max(30).required();

const AsignacionBodySchema = Joi.object({
  FechaAsignacion,
  TiposModAsignacion,
  Usuario,
});

module.exports = { AsignacionBodySchema };
