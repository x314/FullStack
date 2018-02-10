
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   status: 200, 
    //   autenticacion: true, 
    //   id: 10
    // })
    reject({
      status: 401, 
      error: 'El token ha expriado'
    })
  }, 1500);
})

promesa.then((msg) => {
  console.log(msg)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({
      //   status: 20, 
      //   autorizado: true, 
      //   rol: 'administrador'
      // })
      reject({
        status: 403, 
        error: 'No tiene autorizacion para esta operacion'
      })
    }, 1500);
  })
})
.then((msg) => {
  console.log(msg)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200, 
        registros: ['Ana', 'Felipe', 'Loena']
      })
    }, 1500);
  })
})
.then((msg) => {
  console.log(msg.registros)
})
.catch(error => {
  console.log(error)
})
