
import { app } from "./bin/app"
import mongoose = require('mongoose')
import socketio = require('socket.io')

// require('dotenv').config({
//   path: './variables.env'
// })

mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise
mongoose.connection.on('error', error => {
  console.log(error)
})
mongoose.connection.on('connected', () => {
  console.log('Mongo Conectado')
})

require('./api/modelos/libro.model')

const servidor: any = app.listen(process.env.PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${servidor.address().port}`)
})

const io = socketio(servidor)

const sockets = []

io.on('connect', socket => {
  console.log(`id conectado = ${socket.id}`)
  sockets.push(socket.id)
  console.log('Todas las conexiones', sockets)

  setInterval(() => {
    io.emit('hora', (new Date()))
  }, 1000)

  socket.on('enviando nombre', data => {
    // console.log(data)
    // socket.emit('gracias', data)

    // Todos, menos a mí
    // socket.broadcast.emit('gracias', data)

    // Todos
    io.emit('gracias', data)
  })
})
