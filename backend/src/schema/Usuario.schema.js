const Joi = require("joi");

const nombre = Joi.string().min(3).max(30);
const email = Joi.string().email();
const implemento = Joi.array().min(1);
const capacitacion = Joi.array().min(1);
const rol = Joi.array().min(1).items(Joi.string().valid("brigadista", "encargado"));

const usuarioBodySchema = Joi.object({
    nombre: nombre.required(),
    email: email.required(),
    implemento,
    capacitacion,
    rol,
});

module.exports = { usuarioBodySchema };