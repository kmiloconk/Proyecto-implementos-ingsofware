const mongoose = require("mongoose");

const implementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Estado'
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Implement = mongoose.model("Implement", implementSchema);

module.exports = Implement;