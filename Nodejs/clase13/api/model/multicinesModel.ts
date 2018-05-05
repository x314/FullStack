
import mongoose = require('mongoose')

const multicineEsquema = new mongoose.Schema({
  nombre: {
    type: String, 
    required: true
  }, 
  descripcion: {
    type: String, 
    required: true
  }, 
  numeroSalas: {
    type: Number, 
    required: true
  }, 
  caracteristicas: [{
    type: String
  }]
})

const multicinesModel = mongoose.model('multicines', multicineEsquema)

export { multicinesModel }
