const mongoose = require("mongoose");

const TIPOS = ["hacha", "chaqueta", "pantalon", "capucha", "protector"];

const tipoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    enum: TIPOS,
    required: true,
  },
});

const Tipo = mongoose.model("Tipo", tipoSchema);

module.exports = Tipo;