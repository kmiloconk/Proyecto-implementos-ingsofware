const Joi = require("joi");

const brigadista = Joi.string().required();
const implemento = Joi.string().required();
const descripcion = Joi.string().required();
const fechaCreacion = Joi.date().default(Date.now);

const notificacionBodySchema = Joi.object({
    brigadista,
    implemento,
    descripcion,
    fechaCreacion,
});

module.exports = { notificacionBodySchema };