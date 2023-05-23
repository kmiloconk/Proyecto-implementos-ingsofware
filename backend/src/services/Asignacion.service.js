"use strict";
// Importa el modelo de datos 'Asignacion'
const Asignacion = require("../models/Asignacion.model.js");
const TipoModAsignacion = require("../models/tipoModAsignacion.model.js");
const { handleError } = require("../utils/errorHandler");
const { AsignacionBodySchema } = require("../schema/Asignacion.schema");
const Asignacion = require("../models/Asignacion.model.js");


/**
 * @name getAsignacion
 * @description Obtiene todos los Asignacion
 * @returns {Promise<Asignacion[]|[]>}
 */
async function getAsignacion() {
  try {
    return await Asignacion.find();
  } catch (error) {
    handleError(error, "Asignacion.service -> getAsignacion");
  }
}

TipoModAsignacion
/**
 * @name createAsignacion
 * @description Crea un nuevo Asignacion
 * @param Asignacion {Asignacion} - Objeto con los datos del Asignacion
 * @returns {Promise<Asignacion|null>}
 */
async function createAsignacion(Asignacion) {
  try {
    const { error } = AsignacionBodySchema.validate(Asignacion);
    if (error) return null;
    const { fechaAsignacion, TipoModAsignacion, Usuario } = Asignacion;

    const tipoModAsignacion
    = await TipoModAsignacion.find({ nombre: { $in: TipoModAsignacion } });
    const myTipoAsignacion = tipoModAsignacion.map((tipoModAsignacion) =>
    tipoModAsignacion._id);

    const newAsignacion = new Asignacion({ fechaAsignacion,
  TipoModAsignacion: myTipoAsignacion, Usuario  });
    return await newAsignacion.save();
  } catch (error) {
    handleError(error, "Asignacion.service -> createAsignacion");
  }
}


/**
 * @name updateAsignacion
 * @description Actualiza una Asignacion
 * @param id
 * @param Asignacion
 * @returns {Promise<Asignacion|null>}
 */
async function updateAsignacion(id, Asignacion) {
  try {
    const { error } = AsignacionBodySchema.validate(Asignacion);
    if (error) return null;

    return await Asignacion.findByIdAndUpdate(id, Asignacion);
  } catch (error) {
    handleError(error, "Asignacion.service -> updateAsignacion");
  }
}

async function deleteAsignacion(id, Asignacion) {
    try {
      const { error } = AsignacionBodySchema.validate(Asignacion);
      if (error) return null;
  
      return await Asignacion.findByIdAndUpdate(id, Asignacion);
    } catch (error) {
      handleError(error, "Asignacion.service -> updateAsignacion");
    }
  }


module.exports = {
  createAsignacion,
  updateAsignacion,
  deleteAsignacion,
};