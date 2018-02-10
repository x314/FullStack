
const personas = [
	{
		id: 1, 
		nombre: 'Sergio'
	}, 
	{
		id: 2,
		nombre: 'Daniela'
	}, 
	{
		id: 3,
		nombre: 'Emma'
	}, 
	{
		id: 4,
		nombre: 'Andrea'
	}, 
	{
		id: 5,
		nombre: 'Alejandro'
	}
]
const tbody 		= document.querySelector('tbody')
const inputNombre 	= document.getElementById('nombre')
const boton 		= document.querySelector('button')

function pasarAMayuscula() {
	return nombre.toUpperCase()
}

function listado() {
	const filas = personas.map(function(persona) {
		return `
				<tr>
				<td>${persona.id}</td>
				<td>${pasarAMayuscula(persona.nombre)}</td>
				<td>
					<a href="#" data-id="${persona.id}" class="btn btn-danger btnEliminar">Eliminar</a>
					<a href="#" data-id="${persona.id}" class="btn btn-primary btnEditar">Editar</a>
				</td>
				</tr>
				`
	}).join('')
	// const aCadena = filas.join('')

	// tbody.innerHTML = aCadena
	tbody.innerHTML = filas

	const linksEliminar = document.querySelectorAll('a.btnEliminar')
	linksEliminar.forEach(function(link) {
		link.addEventListener('click', function(e) {
			e.preventDefault()

			const elemento = e.target
			// const id = elemento.getAttribute('data-id')
			const id = e.target.dataset.id
			console.log('click' + id)

			// const respuesta = confirm('¿Estás seguro?')
			// if (respuesta) {
				
			// }
			if (confirm('¿Estás seguro?')) {
				const posicion = personas.findIndex(function(persona) {
					return persona.id == id
				})

				if (posicion > -1) {
					personas.splice(posicion, 1)
					listado()
				}
			}
		})
	})

	const linksEditar = document.querySelectorAll('a.btnEditar')
	linksEditar.forEach(function(link) {
		link.addEventListener('click', function(e) {
			// e.preventDefault()

			const elemento = e.target
			// const id = elemento.getAttribute('data-id')
			const id = e.target.dataset.id
			console.log('click' + id)

			const nombre = prompt('Ingrese el nombre')

			if (nombre.trim()) {
				const posicion = personas.findIndex(function(personas) {
					return personalbar.id == id
				})

				if (posicion > -1) {
					personas[posicion].nombre = nombre.trim()
					listado()
				}
			}
		})
	})
}

listado()

boton.addEventListener('click', function(e) {
	e.preventDefault()

	// const valor = inputNombre.value.trim()
	const nombre = inputNombre.value.trim()

	// if (valor != '') {
	// if (valor) {
	if (nombre) {
		// const siguienteId = personas[personas.length - 1].id + 1
		const id = personas[personas.length - 1].id + 1

		// const datos = {}
		const datos = {id, nombre}

		// data.id = siguienteId
		// data.nombre = valor

		// const datos = {
		// 	id: siguienteId, 
		// 	nombre: valor
		// }
		
		personas.push(datos)
		listado()
		inputNombre.value = ''
	}
})
