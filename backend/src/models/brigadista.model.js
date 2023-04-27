const mongoose = require("mongoose");

const brigadistaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    capacitaciones: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Capacitaciones",
    },
    ],
});

const Brigadista = mongoose.model("Brigadista", brigadistaSchema);

module.exports = Brigadista;