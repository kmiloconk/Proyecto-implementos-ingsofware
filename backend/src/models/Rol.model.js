const mongoose = require("mongoose");

//const ROLES = ["brigadista", "encargado"];

const rolSchema = new mongoose.Schema({
    nombre: {
        type: String,
        //enum: ROLES,
        required: true,
    },
});

const Rol = mongoose.model("Rol", rolSchema);

module.exports = Rol;