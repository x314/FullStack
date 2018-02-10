
const promesaArea = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Pago Area51')
  }, 4000);
})

const promesaIsil = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Pago Isil')
  }, 8000);
})

const promesaAmbulancia = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Pago Ambulancia')
  }, 5000);
})

const promesaAgencia = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Pago Agencia')
  }, 9000);
})

const promesaServidores = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Pago Servidores')
  }, 2500);
})

Promise
  .all([promesaArea, promesaIsil, promesaAmbulancia, promesaAgencia, promesaServidores])
  .then(respuesta => {
    console.log(respuesta)
  })
  .catch(error => {
    console.log(error)
  })
