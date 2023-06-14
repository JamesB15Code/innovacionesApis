const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  rol: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema);
