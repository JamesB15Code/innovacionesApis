const express = require("express");
const RedesSociales = require("../models/redesSociales");
const router = express.Router();

// Crear Red Social
router.post("/redesEmpresa", (req, res) => {
    const redesSocialesEmp = RedesSociales(req.body);
    redesSocialesEmp
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todas las Redes Sociales
router.get("/redesEmpresa", (req, res) => {
    RedesSociales
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener una Red Social por su Id
router.get("/redesEmpresa/:id", (req, res) => {
    const { id } = req.params;
    RedesSociales
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar una Red Social
router.put('/redesEmpresa/:id', (req, res) => {
    const { id } = req.params;
    const { tipo, enlace } = req.body;
    RedesSociales
        .updateOne({ _id: id }, { $set: { tipo, enlace } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar una Red Social
router.delete('/redesEmpresa/:id', (req, res) => {
    const { id } = req.params;
    RedesSociales
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router