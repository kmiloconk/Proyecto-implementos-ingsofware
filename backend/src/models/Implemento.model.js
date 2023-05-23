const mongoose = require("mongoose");

const implementoSchema = new mongoose.Schema({
  tipos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tipo",
    },
  ],
  estados: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Estado",
    },
  ],
  fechaVencimiento: {
  type: String,
  required: true,
},
categorias: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria",
  },
],
});

const Implemento = mongoose.model("Implemento", implementoSchema);

module.exports = Implemento;
