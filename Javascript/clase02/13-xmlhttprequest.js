
const objxml 	= new XMLHttpRequest()
const tbody 	= document.querySelector('tbody')
const boton 	= document.querySelectorAll('button')
const formData 	= new formData()

const crearFila = (registro) => {
	return `
			<tr>
				<td>${registro.id}</td>
				<td>${registro.titulo}</td>
				<td>${registro.direccion}</td>
				<td>${registro.createdAt}</td>
				<td>${registro.updatedAt}</td>
				<td>
					<a href="" class="btn btn-danger btnEliminar" data-id="${registro.id}">Eliminar</a>
				</td>
			</tr>
			`
}

const crearFilas = registros => {
	const filas = registros.map(registro => {
		// delete registro.createdAt
		// delete registro.updatedAt
		return crearFila(registro)
	}).join('')

	return filas
}

const asignarEventosFila = () => {
	const linksEliminar = document.querySelectorAll('.btnEliminar')

	linksEliminar.forEach(link => {
		link.addEventListener('click', e => {
			if (!confirm('¿Estás seguro?')) {
				return
			}

			const id = e.target.dataset.id
			const objxml = new XMLHttpRequest()

			objxml.addEventListener('readystatechage', e => {
				const obj = e.currentTarget

				if (obj.readyState == 4 && (obj.status == 200 || obj.status == 201)) {
					listado()
				}
			})
			objxml.open('delete', `http://javascript.tibajodemanda.com/farmacia/${id}`)
			objxml.send()
		})
	})
}

const listado = () => {
	objxml.addEventListener('readystatechange', function(e) {
		const obj = e.currentTarget
	
		// console.log(obj.readyState)
		if (obj.readyState == 4 && (obj.status == 200 || obj.status == 201)) {
			// const registros = obj.responseText
			// console.log(registros)
	
			const registros = JSON.parse(obj.responseText)
			console.table(registros)
	
			// const filas = registros.map(registro => {
			// 	return `
			// 			<tr>
			// 				<td>${registro.id}</td>
			// 				<td>${registro.titulo}</td>
			// 				<td>${registro.direccion}</td>
			// 				<td>${registro.createdAt}</td>
			// 				<td>${registro.updatedAt}</td>
			// 			</tr>
			// 			`
			// }).join('')
	
			const filas = crearFilas(registros)
		
			tbody.innerHTML = filas

			asignarEventosFila()
		}
	})
	
	objxml.open('get', 'http://javascript.tibajodemanda.com/farmacia', true)
	objxml.send()
}

boton.addEventListener('click', e => {
	e.preventDefault()

	const nombre 	= titulo.value.trim()
	const direccion = direccion.value.trim()

	if (nombre && direccion) {
		formData.append('titulo', '')
		formData.append('direccion', '')
		
		var request = new XMLHttpRequest();
		request.open('post', `http://javascript.tibajodemanda.com/farmacia/${id}`)
		request.send(formData);
	}
})

listado()
