"use strict";
// Importa el modelo de datos 'Implement'
const Implement = require("../models/implement.model.js");
const { handleError } = require("../utils/errorHandler");
const { implementBodySchema } = require("../schema/implement.schema");

/**
 * @typedef Implement
 * @property {string} _id
 * @property {String} name
 * @property {String} state
 * @property {String} expirationDate
 * @property {String} category
 * @property {String} brigadist
 * 
 */

/**
 * @name getImplemets
 * @description Obtiene todos los implementos
 * @returns {Promise<Implement[]|[]>}
 */
async function getImplements() {
  try {
    return await Implement.find();
  } catch (error) {
    handleError(error, "implement.service -> getImplements");
  }
}

/**
 * @name createImplement
 * @description Crea un nuevo implemento
 * @param implement {Implement} - Objeto con los datos del implemento
 * @returns {Promise<Implement|null>}
 */
async function createImplement(implement) {
  // Esta funcion es similar al singup
  try {
    const { error } = implementBodySchema.validate(implement);
    if (error) return null;
    const { name, state, expirationDate, category, brigadist } = implement;

    const newImplement = new Implement({ name, state, expirationDate, category, brigadist });
    return await newImplement.save();
  } catch (error) {
    handleError(error, "implement.service -> createImplement");
  }
}

/**
 * @name getImplementById
 * @description Obtiene un implemento por su id
 * @param id {string} - Id del implemento
 * @returns {Promise<Implement|null>}
 */
async function getImplementById(id) {
  try {
    return await Implement.findById({ _id: id });
  } catch (error) {
    handleError(error, "implement.service -> getImplementById");
  }
}

/**
 * @name updateImplement
 * @description Actualiza un implemento
 * @param id
 * @param implement
 * @returns {Promise<Implement|null>}
 */
async function updateImplement(id, implement) {
  try {
    const { error } = implementBodySchema.validate(implement);
    if (error) return null;

    return await Implement.findByIdAndUpdate(id, implement);
  } catch (error) {
    handleError(error, "implement.service -> updateImplement");
  }
}

/**
 * @name deleteImplement
 * @description Elimina un implemento por su id
 * @param id {string} - Id del implemento
 * @returns {Promise<Implement|null>}
 */
async function deleteImplement(id) {
  try {
    return await Implement.findByIdAndDelete(id);
  } catch (error) {
    handleError(error, "implement.service -> deleteImplement");
  }
}

module.exports = {
  getImplements,
  createImplement,
  getImplementById,
  updateImplement,
  deleteImplement,
};
