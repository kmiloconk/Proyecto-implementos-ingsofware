const mongoose = require("mongoose");

const implementoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  fechaVencimiento: {
  type: String,
  required: true,
},
categoria: {
  type: String,
  required: true,
},
});

const Implemento = mongoose.model("Implemento", implementoSchema);

module.exports = Implemento;
