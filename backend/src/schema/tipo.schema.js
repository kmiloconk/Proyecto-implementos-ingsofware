const Joi = require("joi");

const nombre = Joi.string().min(1).required();

const TipoBodySchema = Joi.object({
    nombre,
});

module.exports = { TipoBodySchema };