const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    implemento:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Implemento"
        }
    ],
    capacitacion:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Capacitacion"
        }
    ],
    rol: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        },
    ],
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;