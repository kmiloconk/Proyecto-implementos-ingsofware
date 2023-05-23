const Capacitacion = require("../models/Capacitacion.model");
const { handleError } = require("../utils/errorHandler");
const { CapacitacionBodySchema } = require("../schema/Capacitacion.schema");

async function getCapacitacion() {
    try {
        return await Capacitacion.find();
    } catch (error) {
        handleError(error, "capacitacion.service -> getCapacitacion");
    }
}


async function createCapacitacion(capacitacion) {
    try {
    const { error } = CapacitacionBodySchema.validate(capacitacion);
    if (error) return null;
    const { nombre } = capacitacion;

    const newCapacitacion = new Capacitacion({ nombre });
    return await newCapacitacion.save();
    } catch (error) {
        handleError(error, "capacitacion.service -> createCapacitacion");
    }
}

async function getCapacitacionById(id) {
    try {
        return await Capacitacion.findById({ _id: id });
    } catch (error) {
        handleError(error, "capacitacion.service -> getCapacitacionById");
    }
}


async function updateCapacitacion(id, capacitacion) {
    try {
        const { error } = CapacitacionBodySchema.validate(capacitacion);
        if (error) return null;

        return await Capacitacion.findByIdAndUpdate(id, capacitacion);
    } catch (error) {
        handleError(error, "capacitacion.service -> updateCapacitacion");
    }
}

async function deleteCapacitacion(id) {
    try {
        return await Capacitacion.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "capacitacion.service -> deleteCapacitacion");
    }
}

module.exports = {
    getCapacitacion,
    createCapacitacion,
    getCapacitacionById,
    updateCapacitacion,
    deleteCapacitacion,
};