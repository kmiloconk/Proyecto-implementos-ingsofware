const Joi = require("joi");

const nombre = Joi.string().min(3).max(30).required();

const CapacitacionBodySchema = Joi.object({
    nombre,

});

module.exports = { CapacitacionBodySchema };