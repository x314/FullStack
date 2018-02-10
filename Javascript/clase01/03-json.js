
const persona = {
	talla: 179,
	edad: 40,
	hobbies: ['programar', 'enseñar', 'cocinar'],
	nombre: 'Alex'
}
persona.raza = 'trigueno'
console.log(persona)
console.log(persona.raza)
console.log(persona.comidaFavorita)

const registros = [
	{
		id: 1, 
		nombre: 'Farmacia Universal', 
		ubicacion: {
			latitud: -12.344555,
			longitud: 77.34555
		}
	},
	{
		id: 1, 
		nombre: 'Farmacia La Buena Muerte', 
		ubicacion: {
			latitud: -12.344555,
			longitud: 77.34555
		}
	},
	{
		id: 1, 
		nombre: 'Farmacia Digan lo que digan', 
		ubicacion: {
			latitud: -12.344555,
			longitud: 77.34555
		}
	}
]
console.log(registros[1].nombre)
