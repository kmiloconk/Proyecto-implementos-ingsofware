const Joi = require("joi");

const tipo = Joi.array().min(1).items(Joi.string().valid("admin", "user")).required();
const estado = Joi.array().min(1).items(Joi.string().valid("admin", "user")).required();
const fehaVencimiento = Joi.date().min(3).max(30).required();
const categoria = Joi.array().min(1).items(Joi.string().valid("admin", "user")).required();


const implementoBodySchema = Joi.object({
    tipo,
    estado,
    fehaVencimiento,
    categoria,
});


module.exports = { implementoBodySchema };

