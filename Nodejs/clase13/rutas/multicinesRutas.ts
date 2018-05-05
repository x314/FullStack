
import express = require('express')
import { controller as multicinesCtrl } from '../api/controller/multicinesController'

const ruteador = express.Router()

ruteador.get('/', multicinesCtrl.listar)
ruteador.get('/add', multicinesCtrl.formulario)
ruteador.get('/editar/:id', multicinesCtrl.editar)
ruteador.get('/eliminar/:id', multicinesCtrl.eliminar)
ruteador.get('/:id', multicinesCtrl.detallar)
ruteador.post('/', multicinesCtrl.insertar)
ruteador.put('/:id', multicinesCtrl.actualizar)

export { ruteador }
