const Joi = require("joi");

const tipo = Joi.array().min(1)
const estado = Joi.array().min(1)
const fehaVencimiento = Joi.date().min(3).max(30).required();
const categoria = Joi.array().min(1)


const implementoBodySchema = Joi.object({
    tipo,
    estado,
    fehaVencimiento,
    categoria,
});

module.exports = { implementoBodySchema };
