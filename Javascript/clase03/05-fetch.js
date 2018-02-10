
const listar = () => {
  fetch('http://javascript.tibajodemanda.com/farmacia', {
    method: 'get'
  })
  .then(respuesta => respuesta.json())
  .then(registros => console.log(registros))
  .catch(error => console.log(error))
}

const fd = new FormData()
fd.append('titulo', 'Farmacia Universal')
fd.append('direccion', 'Av. La Santa Muerte 435')

fetch('cccc', {
  method: 'post', 
  body: fd
})
.then(respuesta => respuesta.json())
.then(registro => {
  // listar()
  // console.log(registro)

  return fetch('http://javascript.tibajodemanda.com/farmacia', {
    method: 'get'
  })
})
.then(respuesta => respuesta.json())
.then(registros => {
  console.table(registros)
})
.catch(error => console.log(error))
