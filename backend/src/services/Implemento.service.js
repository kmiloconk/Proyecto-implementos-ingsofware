const Implemento = require("../models/Implemento.model");
const tipo = require("../models/tipo.model.js");
const estado = require("../models/estado.model.js");
const categoria = require("../models/categoria.model.js");
const { handleError } = require("../utils/errorHandler");
const { implementoBodySchema } = require("../schema/Implemento.schema");

async function getImplementos() {
    try {
        return await Implemento.find();
    } catch (error) {
        handleError(error, "Implemento.service -> getImplementos");
    }
}


async function createImplemento(implemento) {
    try {
    const { error } = implementoBodySchema.validate(implemento);
    if (error) return null;
    const { tipos, estados, fechaVencimiento, categorias} = implemento;

    const tiposFound
    = await tipo.find({ nombre: { $in: tipos } });
    const mytipo = tiposFound.map((tipo) =>
    tipo._id);

    const estadosFound
    = await estado.find({ nombre: { $in: estados } });
    const myestado = estadosFound.map((estado) =>
    estado._id);

    const categoriasFound
    = await categoria.find({ nombre: { $in: categorias } });
    const mycategoria = categoriasFound.map((categoria) =>
    categoria._id);

    const newImplemento = new Implemento({ tipos: mytipo, estados: myestado, fechaVencimiento, categorias: mycategoria });
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
