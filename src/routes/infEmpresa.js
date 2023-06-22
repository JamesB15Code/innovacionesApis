const express = require("express");
const InfEmpresa = require("../models/infEmpresa");
const router = express.Router();

//Crear informacion
router.post("/EmpresaData", (req, res) => {
  const footers = new InfEmpresa(req.body); 
  footers
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener toda informacion
router.get("/EmpresaData",(req,res)=>{
  InfEmpresa
  .find()
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Obtener informacion por Id
router.get("/EmpresaData/:id", (req, res)=>{
  const {id} = req.params;
  InfEmpresa
  .findById(id)
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Actualizar informacion
router.put('/EmpresaData/:id',(req,res)=>{
  const {id} = req.params;
  const {logo,sobreNosotros,avisoPrivacidad,direccion,telefono,correo,horario} = req.body;
  InfEmpresa
  .updateOne({_id:id},{$set:{logo,sobreNosotros,avisoPrivacidad,direccion,telefono,correo,horario}})
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Eliminar informacion
router.delete('/EmpresaData/:id',(req,res)=>{
  const {id} = req.params;
  InfEmpresa
  .deleteOne({_id:id})
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});

module.exports = router;