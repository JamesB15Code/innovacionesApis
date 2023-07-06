const express = require("express");
const productSchema = require("../models/prueba");

const router = express.Router();

// Crear un producto
router.post("/datePrueba", (req, res) => {
  const product = new productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener todos los productos
router.get("/datePrueba", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener un producto por su ID
router.get("/datePrueba/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar un producto
router.put("/datePrueba/:id", (req, res) => {
  const { id } = req.params;
  const { marca, modelo, imagen, imagen2, imagen3, imagen4 } = req.body;
  productSchema
    .updateOne({ _id: id }, { $set: { marca, modelo, imagen, imagen2, imagen3, imagen4 } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar un producto
router.delete("/datePrueba/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
