
import { Request, Response, NextFunction } from 'express'
import express = require('express')
import { controller as indexController } from '../api/controllers/indexController'

const ruteador = express.Router()

export { ruteador }

ruteador.get('/', indexController.home)
ruteador.get('/home', indexController.home)
ruteador.get('/about', indexController.about)
