const Implemento = require("../models/Implemento.model");
const tipo = require("../models/Tipo.model");
const estado = require("../models/Estado.model");
const categoria = require("../models/Categoria.model");
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
    const { tipo, estado, fechaVencimiento, categoria, solicitadoPorBrigadista} = implemento;

    const tipoFound = await tipo.find({ nombre: { $in: tipo } });
    const mytipo = tipoFound.map((tipo) => tipo._id);

    const estadoFound = await estado.find({ nombre: { $in: estado } });
    const myestado = estadoFound.map((estado) => estado._id);

    const categoriaFound = await categoria.find({ nombre: { $in: categoria } });
    const mycategoria = categoriaFound.map((categoria) => categoria._id);


    const newImplemento = new Implemento({ tipo: mytipo, estado: myestado, fechaVencimiento, categoria: mycategoria, solicitadoPorBrigadista});
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
