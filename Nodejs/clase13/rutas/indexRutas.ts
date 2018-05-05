
import express = require('express')
import { controller as indexCtrl } from '../api/controller/indexController'

const ruteador = express.Router()

ruteador.get('/', indexCtrl.home)

export { ruteador }
