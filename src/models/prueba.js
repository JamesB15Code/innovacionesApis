const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  imagen2: {
    type: String,
    required: true,
  },
  imagen3: {
    type: String,
    required: false,
  },
  imagen4: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("datePrueba", productSchema);
