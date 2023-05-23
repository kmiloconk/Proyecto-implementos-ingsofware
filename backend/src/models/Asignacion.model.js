const mongoose = require("mongoose");

const AsignacionSchema = new mongoose.Schema({
  FechaAsignacion: [
    {
      type: Date,
      required: true,
    },
  ],
  TipoModAsignacion: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TipoModAsignacion",
    },
  ],

  Usuario: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  ],
});

const Asignacion = mongoose.model("Asignacion", AsignacionSchema);

module.exports = Asignacion;
