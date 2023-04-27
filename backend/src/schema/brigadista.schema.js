const Joi = require("joi");

const name = Joi.string().min(3).max(30).required();
const email = Joi.string().email().required();
const capacitaciones = Joi.array()
    .min(1)
    .items(Joi.string().valid("admin", "user"))
    .required();

const brigadistaBodySchema = Joi.object({
    name,
    email,
    capacitaciones,
});

module.exports = { brigadistaBodySchema };