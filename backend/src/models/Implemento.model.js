
const mongoose = require("mongoose");

const implementoSchema = new mongoose.Schema({
  tipo:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:"tipo"
    }
],
  estado:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:"estado"
    }
],
  fechaVencimiento: {
  type: Date,
  required: true,
},
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"categoria"
  },
});

const Implemento = mongoose.model("Implemento", implementoSchema);


module.exports = Implemento;


