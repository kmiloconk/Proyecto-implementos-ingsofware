const Joi = require("joi");

const tipos = Joi.array()
  .min(1)
  .items(Joi.string().valid("malo", "regular", "excelente"));
const estados = Joi.array()
  .min(1)
  .items(Joi.string().valid("nuevo", "usado"));
const fechaVencimiento = Joi.string().min(3).max(30).required();
const categorias = Joi.array()
  .min(1)
  .items(Joi.string().valid("pesado", "liviano", "estandar"));


const implementoBodySchema = Joi.object({
    tipos,
    estados,
    fechaVencimiento,
    categorias,
});

module.exports = { implementoBodySchema };
