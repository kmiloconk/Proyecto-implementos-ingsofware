const Joi = require("joi");

const tipo = Joi.string().required();
const estado = Joi.string().required();
const fechaVencimiento = Joi.date().required();
const categoria = Joi.string().required();


const implementoBodySchema = Joi.object({
    tipo,
    estado,
    fechaVencimiento,
    categoria,
});

module.exports = { implementoBodySchema };
