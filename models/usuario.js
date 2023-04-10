const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
  {
    nombre:  {
      type:String,
      require:true
    },
    apellido:  {
      type:String,
      require:true
    },
    edad:  {
      type:Number,
      require:true
    },
    email:  {
      type:String,
      require:true
    },
    password:  {
      type:String,
      require:true
    },
    aka:  {
      type:String,
      require:true
    },
    roles: 
    [{
      type: String,
      default:'normal'
    }],
  }
);

// Crear el modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;