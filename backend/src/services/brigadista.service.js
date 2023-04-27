const Brigadista = require("../models/brigadista.model");
const Capacitaciones = require("../models/capacitaciones.model.js")
const { handleError } = require("../utils/errorHandler");
const { brigadistaBodySchema } = require("../schema/brigadista.schema.js");


async function getBrigadistas() {
    try {
        return await Brigadista.find();
    } catch (error) {
        handleError(error, "brigadista.service -> getBrigadistas");
    }
}

async function createBrigadista(brigadista) {
    try {
        const { error } = brigadistaBodySchema.validate(brigadista);
        if (error) return null;
        const { name, email, capacitaciones } = brigadista;

        const brigadistaFound = await Brigadista.findOne({ email: brigadista.email });
        if (brigadistaFound) return null;

        const capacitacionFound = await Capacitaciones.find({ name: { $in: capacitaciones } });
        const myCapacitacion = capacitacionFound.map((capacitacion) => capacitacion._id);

        const newBrigadista = new Brigadista({ name, email, capacitaciones: myCapacitacion });
        return await newBrigadista.save();
    } catch (error) {
        handleError(error, "brigadita.service -> createBrigadista");
    }
}


async function getBrigadistaById(id) {
    try {
        return await Brigadista.findById({ _id: id });
    } catch (error) {
        handleError(error, "brigadista.service -> getBrigadistaById");
    }
}


async function updateBrigadista(id, brigadista) {
    try {
        const { error } = brigadistaBodySchema.validate(brigadista);
        if (error) return null;
        return await Brigadista.findByIdAndUpdate(id, brigadista);
    } catch (error) {
        handleError(error, "brigadista.service -> updateBrigadista");
    }
}


async function deleteBrigadista(id) {
    try {
        return await Brigadista.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "brigadista.service -> deleteBrigadista");
    }
}

module.exports = {
    getBrigadistas,
    createBrigadista,
    getBrigadistaById,
    updateBrigadista,
    deleteBrigadista,
};
