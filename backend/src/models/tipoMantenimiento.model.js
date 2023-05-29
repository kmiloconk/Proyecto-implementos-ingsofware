"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

const TIPOSMANTENIMIENTOS = ["correctivo", "preventivo", "predictivo"];

// Crea el esquema de la coleccion 'tiposMantenimiento'
const tipoMantenimientoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    enum: TIPOSMANTENIMIENTOS,
    required: true,
  },
});

// Crea el modelo de datos 'Mantenimiento' a partir del esquema 'MantenimientoSchema'
const TipoMantenimiento = mongoose.model("TipoMantenimiento", tipoMantenimientoSchema);

module.exports = TipoMantenimiento;
