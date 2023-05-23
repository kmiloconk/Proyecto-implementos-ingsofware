"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

const estadoS = ["nuevo", "usado"];

// Crea el esquema de la coleccion 'estado'
const estadoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    enum: estadoS,
    required: true,
  },
});

// Crea el modelo de datos 'Mantenimiento' a partir del esquema 'MantenimientoSchema'
const estado = mongoose.model("estado", estadoSchema);

module.exports = estado;
