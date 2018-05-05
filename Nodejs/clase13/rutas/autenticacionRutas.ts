
import express = require('express')
import { controller as autenticacionCtrl } from '../api/controller/autenticacionController'

const ruteador = express.Router()

ruteador.get('/login', autenticacionCtrl.login)
ruteador.get('/logout', autenticacionCtrl.logout)

export { ruteador }
