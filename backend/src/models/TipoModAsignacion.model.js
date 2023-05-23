"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

const TiposModAsignacion = ["Asignarion", "Modificacion", "Eliminacion"];

// Crea el esquema de la coleccion 'tiposMantenimiento'
const TiposModAsignacionSchema = new mongoose.Schema({
  nombre: {
    type: String,
    enum: TiposModAsignacion,
    required: true,
  },
});

// Crea el modelo de datos 'Mantenimiento' a partir del esquema 'MantenimientoSchema'
const TipoModAsignacion = mongoose.model("TipoModAsignacion", TiposModAsignacionSchema);

module.exports = TipoModAsignacion;