const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//empoid crear un usuario ruta
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener todos usuarios
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener solo un usuarios
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//actualizar un usuarios
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { username, email } }) //todos los parametros que desamos actualizar
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//eliminar un usuarios
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .deleteOne({ _id: id }) 
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;
