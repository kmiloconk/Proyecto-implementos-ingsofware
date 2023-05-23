const Tipo = require("../models/tipo.model");
const { handleError } = require("../utils/errorHandler");
const { TipoBodySchema } = require("../schema/tipo.schema");

async function getTipos() {
    try {
        return await Tipo.find();
    } catch (error) {
        handleError(error, "tipo.service -> getTipos");
    }
}


async function createTipo(tipo) {
    try {
    const { error } = TipoBodySchema.validate(tipo);
    if (error) return null;
    const { nombre} = tipo;

    const newTipo = new Tipo({ nombre });
    return await newTipo.save();
    } catch (error) {
        handleError(error, "tipo.service -> createTipo");
    }
}

async function getTipoById(id) {
    try {
        return await Tipo.findById({ _id: id });
    } catch (error) {
        handleError(error, "tipo.service -> getTipoById");
    }
}


async function updateTipo(id, tipo) {
    try {
        const { error } = tipoBodySchema.validate(tipo);
        if (error) return null;

        return await Tipo.findByIdAndUpdate(id, tipo);
    } catch (error) {
        handleError(error, "tipo.service -> updateTipo");
    }
}

async function deleteTipo(id) {
    try {
        return await Tipo.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "tipo.service -> deleteTipo");
    }
}

module.exports = {
    getTipos,
    createTipo,
    getTipoById,
    updateTipo,
    deleteTipo,
};