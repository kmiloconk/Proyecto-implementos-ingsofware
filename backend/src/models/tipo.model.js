const mongoose = require("mongoose");

const tipoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Tipo = mongoose.model("Tipo", tipoSchema);

module.exports = Tipo;