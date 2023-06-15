const express = require("express");
const productSchema = require("../models/product");

const router = express.Router();

// Crear un producto
router.post("/products", (req, res) => {
  const product = new productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener todos los productos
router.get("/products", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener un producto por su ID
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar un producto
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { marca, modelo, descripcion, cantidad, categoria, precio, imagen } = req.body;
  productSchema
    .updateOne({ _id: id }, { $set: { marca, modelo, descripcion, cantidad, categoria, precio, imagen } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar un producto
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
