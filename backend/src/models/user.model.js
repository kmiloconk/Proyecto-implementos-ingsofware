const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Definir los campos del usuario
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Agregar más campos según sea necesario
});

module.exports = mongoose.model("User", userSchema);
