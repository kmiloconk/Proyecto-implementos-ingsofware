const mongoose = require("mongoose");


const ESTADOS = ["nuevo", "usado"];

const EstadoSchema = new mongoose.Schema({
  nombre:{
    type: String,
    enum: ESTADOS,
    required: true,
  },
});

const Estado = mongoose.model("Estado", EstadoSchema);

module.exports = Estado;