const mongoose = require('mongoose');

const notificacionSchema = new mongoose.Schema({
    brigadista: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    implemento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Implemento',
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

const Notificacion = mongoose.model('Notificacion', notificacionSchema);

module.exports = Notificacion;
