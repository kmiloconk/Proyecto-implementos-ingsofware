const Joi = require("joi");

const tipo = Joi.array().min(1).items(Joi.string().valid("admin", "user")).required();
const estado = Joi.array().min(1).items(Joi.string().valid("admin", "user")).required();
const fechaVencimiento = Joi.date().min(3).max(30).required();
const categoria = Joi.array().min(1).items(Joi.string().valid("admin", "user")).required();


const implementoBodySchema = Joi.object({
    tipo,
    estado,
    fechaVencimiento,
    categoria,
});

module.exports = { implementoBodySchema };