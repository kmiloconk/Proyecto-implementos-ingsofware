const mongoose = require("mongoose");

const capacitacionSchema = new mongoose.Schema({
  nombre:{
    type: String,
    required: true,
  },
});

const Capacitacion = mongoose.model("Capacitacion", capacitacionSchema);


module.exports = Capacitacion;