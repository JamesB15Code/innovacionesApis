const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpresaSchema = new Schema({
  logo: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  sobreNosotros: {
    type: String,
    required: true,
  },
  avisoPrivacidad: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  horario: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("EmpresaData", EmpresaSchema);
