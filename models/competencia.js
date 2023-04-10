const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const competenciaSchema = new Schema(
    {
        nombre_competencia:  {
            type:String,
            require:true
        },
        tipo_competencia: {
            type:String,
            require:true
        },
        ciudad: {
            type:String
        },
        fecha_inicio: {
            type:Date,
            require:true
        },
        fecha_finalizacion: {
            type:Date,
            default:fecha_inicio
        },
        numero_fechas: {
            type:Number,
            default:'1'
        },
        formato: {
            type: mongoose.Types.ObjectId
        },
        participantes: [{
            puntuacion_general: 
            {   type: Number,
                default:'0'
            },
            aka_participante: {
                type:String,
                require:true
            }
        }],
        jueces: [{
            id_juez: {
                type: mongoose.Types.ObjectId
            },
            aka_juez: {
                String,
                require:true
            }
        }]
    },
    {
        timestamps:true
    }
);

// Crear el modelo
const Competencia = mongoose.model('Competencia', competenciaSchema);

module.exports = Competencia;