const Joi = require("joi");


const nombre = Joi.string().max(30).required();

const EstadoBodySchema = Joi.object({
    nombre,

});

module.exports = { EstadoBodySchema };