const mongoose = require("mongoose");

const tipoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
});

const Tipo = mongoose.model("Tipo", tipoSchema);

module.exports = Tipo;