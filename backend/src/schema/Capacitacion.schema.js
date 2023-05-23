const Joi = require("joi");

const name = Joi.string().min(1).required();

const CapacitacionBodySchema = Joi.object({
    name,
});

module.exports = { CapacitacionBodySchema };