const Categoria = require("../models/Categoria.model");
const { handleError } = require("../utils/errorHandler");
const { CategoriaBodySchema } = require("../schema/Categoria.schema");

async function getCategorias() {
    try {
        return await Categoria.find();
    } catch (error) {
        handleError(error, "categoria.service -> getCategorias");
    }
}


async function createCategoria(categoria) {
    try {
    const { error } = CategoriaBodySchema.validate(categoria);
    if (error) return null;
    const { nombre } = categoria;

    const newCategoria = new Categoria({ nombre });
    return await newCategoria.save();
    } catch (error) {
        handleError(error, "categoria.service -> createCategoria");
    }
}

async function getCategoriaById(id) {
    try {
        return await Categoria.findById({ _id: id });
    } catch (error) {
        handleError(error, "categoria.service -> getCategoriaById");
    }
}


async function updateCategoria(id, categoria) {
    try {
        const { error } = categoriaBodySchema.validate(categoria);
        if (error) return null;

        return await Categoria.findByIdAndUpdate(id, categoria);
    } catch (error) {
        handleError(error, "categoria.service -> updateCategoria");
    }
}

async function deleteCategoria(id) {
    try {
        return await Categoria.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "categoria.service -> deletecategoria");
    }
}

module.exports = {
    getCategorias,
    createCategoria,
    getCategoriaById,
    updateCategoria,
    deleteCategoria,
};