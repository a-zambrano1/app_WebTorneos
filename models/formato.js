const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formatoSchema = new Schema(
    {
        nombre:  {
            type:String,
            require:true
        },
        votacion_minima: {
            type:Number,
            require:true
        },
        votacion_maxima: {
            type:Number,
            require:true
        },
        rondas: [{
            numero_ronda: 
            {   type: Number,
                default:'1'
            },
            nombre_ronda: {
                type:String,
                require:true
            },
            numero_patrones: 
            {   type: Number,
                require:true
            },
        }],
    },
    {
        timestamps:true
    }
);

// Crear el modelo
const Formato = mongoose.model('Formato', usuarioSchema);

module.exports = Formato;