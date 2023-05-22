const Joi = require("joi");

const name = Joi.string().min(3).max(30).required();

const CategoriaBodySchema = Joi.object({
    name,
});

module.exports = { CategoriaBodySchema };