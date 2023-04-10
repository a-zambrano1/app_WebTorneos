const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const votacionSchema = new Schema(
    {
        nombre_competencia:  {
            type:String,
            require:true
        },
        numero_de_la_fecha: {
            type:String,
            default:'1'
        },
        fecha: {
            type:Date,
            require:true
        },
        nombre_participante_votado: {
            type:String,
            require:true
        },
        nombre_contrincante: {
            type:String,
            require:true
        },
        id_competencia: {
            type: mongoose.Types.ObjectId
        },
        id_formato: {
            type: mongoose.Types.ObjectId
        },
        rondas  : [{
            numero_ronda: 
            {   type: Number,
                require:true
            },
            nombre_ronda: {
                type:String,
                require:true
            },
            jueces: [{
                patrones: [{
                    numero_patron: 
                    {   type: Number,
                        require:true
                    },
                    valoracion: {
                        type:String,
                        default:'0'
                    },
                }],
                id_juez: {
                    type: mongoose.Types.ObjectId
                },
                aka_juez: {
                    String,
                    require:true
                }
            }]
        }]
    },
    {
        timestamps:true
    }
);

// Crear el modelo
const Votacion = mongoose.model('Votacion', votacionSchema);

module.exports = Votacion;