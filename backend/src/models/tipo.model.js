const mongoose = require("mongoose");
const tipoS = ["malo", "regular", "excelente"];

const tipoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    enum: tipoS,
    required: true,
  },
});


const tipo = mongoose.model("tipo", tipoSchema);

module.exports = tipo;

