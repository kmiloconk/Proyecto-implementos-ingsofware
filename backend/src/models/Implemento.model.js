const mongoose = require("mongoose");

const implementoSchema = new mongoose.Schema({
  tipo:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Tipo"
},
  estado:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Estado"
},
  fechaVencimiento: {
  type: Date,
  required: true,
},
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Categoria"
  },
});

const Implemento = mongoose.model("Implemento", implementoSchema);

module.exports = Implemento;
