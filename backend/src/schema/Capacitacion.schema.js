const Joi = require("joi");

const name = Joi.string().min(3).max(30).required();

const TipoBodySchema = Joi.object({
    name,
});

module.exports = { TipoBodySchema };