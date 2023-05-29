const mongoose = require("mongoose");


const CATEGORIAS = ["pesado", "liviano", "estandar"];


const categoriaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    enum: CATEGORIAS,
    required: true,
  },
});


const Categoria = mongoose.model("Categoria", categoriaSchema);


module.exports = Categoria;