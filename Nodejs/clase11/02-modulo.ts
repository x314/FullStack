
import { longitud, saludar, fecha } from './utilitario'
import obtenerRol from './utilitario'

const nombre: string = 'Alex'
console.log(longitud(nombre))

const lista: Array<string> = ['Andrea', 'Fernanda', 'Jana']
console.log(saludar(lista))

console.log(fecha)

console.log(obtenerRol())


// import * as funciones from './utilitario'

// const nombre: string = 'Alex'
// console.log(funciones.longitud(nombre))

// const lista: Array<string> = ['Andrea', 'Fernanda', 'Jana']
// console.log(funciones.saludar(lista))

// console.log(funciones.fecha)


// import funciones = require('./utilitario')

// const nombre: string = 'Alex'
// console.log(funciones.longitud(nombre))

// const lista: Array<string> = ['Andrea', 'Fernanda', 'Jana']
// console.log(funciones.saludar(lista))

// console.log(funciones.fecha)
