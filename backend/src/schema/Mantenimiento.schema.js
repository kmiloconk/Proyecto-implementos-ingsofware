const Joi = require("joi");

const fechaMantenimiento = Joi.string().min(3).max(30).required();
const tiposMantenimientos = Joi.array()
.min(1)
.items(Joi.string().valid("correctivo", "preventivo", "predictivo"));

const nombreResponsable = Joi.string().min(3).max(30).required();
const descripcion = Joi.string().min(3).max(30).required();
const estado = Joi.string().min(3).max(30).valid("true", "false");
const observacion = Joi.string().min(3).max(30).required();
const mantenimientoBodySchema = Joi.object({
  fechaMantenimiento,
  tiposMantenimientos,
  nombreResponsable,
  descripcion,
  estado,
  observacion,
});

module.exports = { mantenimientoBodySchema };
