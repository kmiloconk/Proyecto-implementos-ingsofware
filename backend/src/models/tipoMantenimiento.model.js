const mongoose = require("mongoose");

const TIPOSMANTENIMIENTOS = ["correctivo", "preventivo", "predictivo"];

const tipoMantenimientoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    enum: TIPOSMANTENIMIENTOS,
    required: true,
  },
});


const TipoMantenimiento = mongoose.model("TipoMantenimiento", tipoMantenimientoSchema);

module.exports = TipoMantenimiento;
