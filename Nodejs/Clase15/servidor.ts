require("dotenv").config({ path: "./variables.env" })
import mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise
mongoose.connection.on("error", error => {
	console.log(error)
})

// Modelos
require("./api/modelos/cinesModelo")
require("./api/modelos/opinionesModelo")
require("./api/modelos/usuariosModelo")

import { app } from "./bin/app"

//const app = require("./bin/app")
const servidor = app.listen(process.env.PORT, () => {
	const address: any = servidor.address()
	console.log(`Servidor ejecutándose en el puerto ${address.port}`)
})