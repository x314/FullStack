
import { Request, Response, NextFunction } from 'express'
import express = require('express')
import { controller as productController } from '../api/controllers/productController'

const ruteador = express.Router()

export { ruteador }

ruteador.get('/', productController.listar)
ruteador.post('/add', productController.agregar)
