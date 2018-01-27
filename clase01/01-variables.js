
// 'var' define variables de manera global
var nombre = 'Alex'
console.log(nombre)


// 'let' define variables de manera loca, solo existe dentro de su ámbito
let apellido = 'Villanueva'
apellido = 'Villanueva Mercado'
console.log(apellido)
if (true) {
	let curso = 'FullStack'
	console.log(curso)
}
// console.log(curso)


// tipo de dato: constante
// valor: no es constante
const lugar = 'Area51'
// no se puede reasignar el tipo de dato a una variable, así se rasigne el mismo tipo de dato
// lugar = 'Area51 Training Center'
console.log(lugar)


const lista = ['node', 'javascript', 'angular']
// lista = ['Node9', 'Javascript6', 'Angular5']
lista[0] = 'Node v9'
console.log(lista)
