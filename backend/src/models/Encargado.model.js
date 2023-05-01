const mongoose = require("mongoose");

const EncargadoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    
});

const Encargado = mongoose.model("Encargado", EncargadoSchema);

module.exports = Encargado;