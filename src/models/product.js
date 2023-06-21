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
  descripcion: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  existencia: {
    type: Number,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
