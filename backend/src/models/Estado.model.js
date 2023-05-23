"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

const ESTADOS = ["nuevo", "usado"];
// Crea el esquema de la coleccion 'capacitaciones'
const EstadoSchema = new mongoose.Schema({
  nombre:{
    type: String,
    enum: ESTADOS,
    required: true,
  },
});

// Crea el modelo de datos 'Estado' a partir del esquema 'EstadoSchema'
const Estado = mongoose.model("Estado", EstadoSchema);

// Exporta el modelo de datos 'Estado'
module.exports = Estado;