const Estado = require("../models/Estado.model");
const { handleError } = require("../utils/errorHandler");
const { EstadoBodySchema } = require("../schema/Estado.schema");

async function getEstado() {
    try {
        return await Estado.find();
    } catch (error) {
        handleError(error, "Estado.service -> getEstado");
    }
}


async function createEstado(Estado) {
    try {
    const { error } = EstadoBodySchema.validate(Estado);
    if (error) return null;
    const { name } = Estado;

    const newEstado = new Estado({ name });
    return await newEstado.save();
    } catch (error) {
        handleError(error, "Estado.service -> createEstado");
    }
}

async function getEstadoById(id) {
    try {
        return await Estado.findById({ _id: id });
    } catch (error) {
        handleError(error, "Estado.service -> getEstadoById");
    }
}


async function updateEstado(id, Estado) {
    try {
        const { error } = EstadoBodySchema.validate(Estado);
        if (error) return null;

        return await Estado.findByIdAndUpdate(id, Estado);
    } catch (error) {
        handleError(error, "Estado.service -> updateEstado");
    }
}

async function deleteEstado(id) {
    try {
        return await Estado.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "Estado.service -> deleteEstado");
    }
}

module.exports = {
  getEstado,
  createEstado,
  getEstadoById,
  updateEstado,
  deleteEstado,
};