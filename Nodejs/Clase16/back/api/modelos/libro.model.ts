const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	titulo: {
		type: String,
		required: true,
		trim: true
	},

	descripcion: String,
	foto: String
})

const Libro = mongoose.model("Libro", esquema)

export { Libro }