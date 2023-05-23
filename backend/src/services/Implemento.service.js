const Implemento = require("../models/Implemento.model");
const { handleError } = require("../utils/errorHandler");
const { implementoBodySchema } = require("../schema/Implemento.schema");

async function getImplementos() {
    try {
        return await Implemento.find().populate('tipo').populate('estado');
    } catch (error) {
        handleError(error, "Implemento.service -> getImplementos");
    }
}


async function createImplemento(implemento) {
    try {
    const { error } = implementoBodySchema.validate(implemento);
    if (error) return null;
    const { tipo, estado, fechaVencimiento, categoria} = implemento;

    const newImplemento = new Implemento({ tipo, estado, fechaVencimiento, categoria });
    return await newImplemento.save();
    } catch (error) {
        handleError(error, "implemento.service -> createImplemento");
    }
}

async function getImplementoById(id) {
    try {
        return await Implemento.findById({ _id: id });
    } catch (error) {
        handleError(error, "implemento.service -> getImplementoById");
    }
}


async function updateImplemento(id, implemento) {
    try {
        const { error } = implementoBodySchema.validate(implemento);
        if (error) return null;

        return await Implemento.findByIdAndUpdate(id, implemento);
    } catch (error) {
        handleError(error, "implemento.service -> updateImplemento");
    }
}

async function deleteImplemento(id) {
    try {
        return await Implemento.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "implemento.service -> deleteImplemento");
    }
}

module.exports = {
    getImplementos,
    createImplemento,
    getImplementoById,
    updateImplemento,
    deleteImplemento,
};
