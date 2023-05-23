const mongoose = require("mongoose");


const EstadoSchema = new mongoose.Schema({
  nombre:{
    type: String,
    required: true,
  },
});

const Estado = mongoose.model("Estado", EstadoSchema);

module.exports = Estado;