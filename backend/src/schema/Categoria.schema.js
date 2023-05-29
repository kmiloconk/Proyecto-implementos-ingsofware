const Joi = require("joi");


const nombre = Joi.string().min(1).required();


const CategoriaBodySchema = Joi.object({
    nombre,
});

module.exports = { CategoriaBodySchema };
