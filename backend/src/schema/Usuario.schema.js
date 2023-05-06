const Joi = require("joi");

const nombre = Joi.string().min(3).max(30).required();
const email = Joi.string().email().required();
const implemento = Joi.array()
.min(1)
.items(Joi.string().valid("admin", "user"))
.required();
const capacitacion = Joi.array()
.min(1)
.items(Joi.string().valid("admin", "user"))
.required();
const rol = Joi.array()
.min(1)
.items(Joi.string().valid("Brigadista", "Encargado"))
.required();

const usuarioBodySchema = Joi.object({
    nombre,
    email,
    implemento,
    capacitacion,
    rol,
});

module.exports = { usuarioBodySchema };