"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

// Crea el esquema de la coleccion 'usuarios'
const implementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
// en el estado se podria usar el metodo enum para presentar 2 opciones como por ejemplo: estado:bueno, estado:malo
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Estado'
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  // pide la id de un brigadista
  brigadist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'brigadista'
  },
});

// Crea el modelo de datos 'User' a partir del esquema 'userSchema'
const Implement = mongoose.model("Implement", implementSchema);

// Exporta el modelo de datos 'Implement'
module.exports = Implement;
