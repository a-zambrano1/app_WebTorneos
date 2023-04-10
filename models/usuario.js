const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre:  String,
  apellido: String,
  edad: Int32Array,
  email: String,
  contraseña: String,
  roles: Array[String],
  aka: String
});

// Crear el modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;