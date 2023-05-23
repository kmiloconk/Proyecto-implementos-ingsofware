const mongoose = require("mongoose");

const ROLES = ["brigadista", "encargado"];

const rolSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ROLES,
        required: true,
    },
});

const Rol = mongoose.model("Rol", rolSchema);

module.exports = Rol;