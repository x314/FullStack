
// Importaciones
import { Application, Request, Response, NextFunction } from 'express'
import express = require('express')
import bodyParser = require('body-parser')
import { ruteador as productosRutas } from '../rutas/productosRutas'
import { ruteador as indexRutas } from '../rutas/indexRutas'
import { manejador } from '../errores/manejadorErrores'

require('dotenv').config({
	path: './variables.env'
})

// Declaraciones
const app: Application = express()
app.set('view engine', 'pug')
app.set('views', './vistas')

// app.use('/public', (req: Request, res: Response, next: NextFunction) => {
// 	// res.send(__dirname)
// 	res.sendFile('/Users/admin/Documents/FullStack/Nodejs/clase12/public' + req.url)
// })
app.use(express.static('./public'))

// Middlewares
app.use((req: Request, res: Response, next: NextFunction) => {
	res.locals.titulo = process.env.TITULO
	next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

// Rutas
app.use('/', indexRutas)
app.use('/products', productosRutas)

// Errores

//  Página no encontrada
app.use(manejador.noEncontrada)

// Manejador de errores general
app.use(manejador.general)

// Escuchar el puerto
app.listen(process.env.PUERTO, () => console.log(`Servidor escuchando en el puerto ${process.env.PUERTO}`))
