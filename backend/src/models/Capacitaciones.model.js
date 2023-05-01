"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

// Crea el esquema de la coleccion 'capacitaciones'
const capacitacionesSchema = new mongoose.Schema({
  nombre:{
    type: String,
    required: true,
  },
});

// Crea el modelo de datos 'Capacitaciones' a partir del esquema 'capacitacionesSchema'
const Capacitaciones = mongoose.model("Capacitaciones", capacitacionesSchema);

// Exporta el modelo de datos 'Capacitaciones'
module.exports = Capacitaciones;