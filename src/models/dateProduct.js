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
  color: {
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

module.exports = mongoose.model("dateProduct", productSchema);
