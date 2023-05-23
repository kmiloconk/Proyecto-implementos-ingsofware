const Joi = require("joi");

const name = Joi.string().min(1).required();

const EstadoBodySchema = Joi.object({
    name,
});

module.exports = { EstadoBodySchema };