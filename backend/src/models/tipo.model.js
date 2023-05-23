"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

const tipoS = ["malo", "regular", "excelente"];

// Crea el esquema de la coleccion 'tipo'
const tipoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    enum: tipoS,
    required: true,
  },
});

// Crea el modelo de datos 'Mantenimiento' a partir del esquema 'MantenimientoSchema'
const tipo = mongoose.model("tipo", tipoSchema);

module.exports = tipo;
