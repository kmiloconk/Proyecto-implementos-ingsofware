"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

// Crea el esquema de la coleccion 'capacitaciones'
const EstadoSchema = new mongoose.Schema({
  nombre:{
    type: String,
    required: true,
  },
});

// Crea el modelo de datos 'Estado' a partir del esquema 'EstadoSchema'
const Estado = mongoose.model("Estado", EstadoSchema);

// Exporta el modelo de datos 'Estado'
module.exports = Estado;