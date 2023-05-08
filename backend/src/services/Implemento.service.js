const Implement = require("../models/Implemento.model");
const { handleError } = require("../utils/errorHandler");
const { implementBodySchema } = require("../schema/Implemento.schema");

async function getImplements() {
    try {
        return await Implement.find();
    } catch (error) {
        handleError(error, "implement.service -> getImplements");
    }
}


async function createImplement(implement) {
    try {
    const { error } = implementBodySchema.validate(implement);
    if (error) return null;
    const { name, state, expirationDate, category, brigadist } = implement;

    const newImplement = new Implement({ name, state, expirationDate, category, brigadist });
    return await newImplement.save();
    } catch (error) {
        handleError(error, "implement.service -> createImplement");
    }
}

async function getImplementById(id) {
    try {
        return await Implement.findById({ _id: id });
    } catch (error) {
        handleError(error, "implement.service -> getImplementById");
    }
}


async function updateImplement(id, implement) {
    try {
        const { error } = implementBodySchema.validate(implement);
        if (error) return null;

        return await Implement.findByIdAndUpdate(id, implement);
    } catch (error) {
        handleError(error, "implement.service -> updateImplement");
    }
}

async function deleteImplement(id) {
    try {
        return await Implement.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "implement.service -> deleteImplement");
    }
}

module.exports = {
  getImplements,
  createImplement,
  getImplementById,
  updateImplement,
  deleteImplement,
};