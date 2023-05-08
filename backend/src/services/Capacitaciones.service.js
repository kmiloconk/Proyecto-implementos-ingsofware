const Capacitaciones = require("../models/Capacitaciones.model");
const { handleError } = require("../utils/errorHandler");
const { TipoBodySchema } = require("../schema/Capacitaciones.schema");

async function getCapacitaciones() {
    try {
        return await Capacitaciones.find();
    } catch (error) {
        handleError(error, "capacitaciones.service -> getCapacitaciones");
    }
}


async function createCapacitacion(capacitaciones) {
    try {
    const { error } = CapacitacionesBodySchema.validate(capacitaciones);
    if (error) return null;
    const { name } = capacitaciones;

    const newCapacitaciones = new Capacitaciones({ name });
    return await newCapacitaciones.save();
    } catch (error) {
        handleError(error, "capacitaciones.service -> createCapacitacion");
    }
}

async function getCapacitacionById(id) {
    try {
        return await Capacitaciones.findById({ _id: id });
    } catch (error) {
        handleError(error, "capacitaciones.service -> getCapacitacionById");
    }
}


async function updateCapacitacion(id, capacitaciones) {
    try {
        const { error } = CapacitacionesBodySchema.validate(capacitaciones);
        if (error) return null;

        return await Capacitaciones.findByIdAndUpdate(id, capacitaciones);
    } catch (error) {
        handleError(error, "capacitaciones.service -> updateCapacitacion");
    }
}

async function deleteCapacitacion(id) {
    try {
        return await Capacitaciones.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "capacitaciones.service -> deleteCapacitacion");
    }
}

module.exports = {
  getCapacitaciones,
  createCapacitacion,
  getCapacitacionById,
  updateCapacitacion,
  deleteCapacitacion,
};