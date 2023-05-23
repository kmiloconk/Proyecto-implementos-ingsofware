"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

const categoriaS = ["pesado", "liviano", "estandar"];

// Crea el esquema de la coleccion 'categoria'
const categoriaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    enum: categoriaS,
    required: true,
  },
});

// Crea el modelo de datos 'Mantenimiento' a partir del esquema 'MantenimientoSchema'
const categoria = mongoose.model("categoria", categoriaSchema);

module.exports = categoria;
