
const Joi = require("joi");

const tipo = Joi.string().min(1).required();
const estado = Joi.string().min(1).required();
const fechaVencimiento = Joi.string().min(3).max(30).required();
const categoria = Joi.string().min(1).required();
const solicitadoPorBrigadista = Joi.boolean().required()



const implementoBodySchema = Joi.object({
    tipo,
    estado,
    fechaVencimiento,
    categoria,
    solicitadoPorBrigadista,
});

module.exports = { implementoBodySchema };


