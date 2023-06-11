const { respondSuccess, respondError } = require("../utils/resHandler");
const CategoriaService = require("../services/Categoria.service");
const { handleError } = require("../utils/errorHandler");


async function getCategorias(req, res) {
  try {
    const categoria = await CategoriaService.getCategorias();
    categoria.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, categoria);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}


async function createCategoria(req, res) {
  try {
    const nuevaCategoria = await CategoriaService.createCategoria(req.body);
    nuevaCategoria === null
      ? respondError(
          req,
          res,
          400,
          "Error en la validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" },
        )
      : respondSuccess(req, res, 201, nuevaCategoria);
  } catch (error) {
    handleError(error, "categoria.controller -> createCategoria");
    respondError(req, res, 500, "No se pudo crear la categoria");
  }
}


async function getCategoriaById(req, res) {
  try {
    const { id } = req.params;

    const categoria = await CategoriaService.getCategoriaById(id);
    categoria === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro la categoria solicitada",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, categoria);
  } catch (error) {
    handleError(error, "categoria.controller -> getCategoriaById");
    respondError(req, res, 500, "No se pudo obtener la categoria");
  }
}


async function updateCategoria(req, res) {
  try {
    const { id } = req.params;
    const categoria = await CategoriaService.updateCategoria(id, req.body);
    categoria === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro la categoria solicitada",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, categoria);
  } catch (error) {
    handleError(error, "categoria.controller -> updateCategoria");
    respondError(req, res, 500, "No se pudo actualizar la categoria");
  }
}


async function deleteCategoria(req, res) {
  try {
    const { id } = req.params;
    const categoria = await CategoriaService.deleteCategoria(id);
    categoria === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el usuario solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, categoria);
  } catch (error) {
    handleError(error, "categoria.controller -> deleteCategoria");
    respondError(req, res, 500, "No se pudo eliminar la categoria");
  }
}

module.exports = {
  getCategorias,
  createCategoria,
  getCategoriaById,
  updateCategoria,
  deleteCategoria,
};