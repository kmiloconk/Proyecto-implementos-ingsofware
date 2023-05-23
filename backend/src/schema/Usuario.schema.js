const Joi = require("joi");

const nombre = Joi.string().required();
const email = Joi.string().email().required();
const implemento = Joi.array().items(Joi.string().required());
const capacitacion = Joi.array().items(Joi.string().required());
const rol = Joi.array().items(Joi.string().required());

const usuarioBodySchema = Joi.object({
    nombre,
    email,
    implemento,
    capacitacion,
    rol,
});

module.exports = { usuarioBodySchema };