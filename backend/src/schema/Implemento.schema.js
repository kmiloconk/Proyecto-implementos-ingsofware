const Joi = require("joi");

const name = Joi.string().min(3).max(30).required();
const state = Joi.ObjectId.required(); // duda
const expirationDate = Joi.date().min(3).max(30).required();
const category = Joi.string().min(3).max(30).required();
const brigadist = Joi.ObjectId.required(); // duda

const implementBodySchema = Joi.object({
    name,
    state,
    expirationDate,
    category,
    brigadist,
});

module.exports = { implementBodySchema };
