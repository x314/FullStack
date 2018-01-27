
const libros = [
	{
		titulo: 'El perfume',
		anno: 2000
	},
	{
		titulo: 'La serpiente de oro',
		anno: 1889
	},
	{
		titulo: 'Tungsteno',
		anno: 1997
	},
	{
		titulo: 'El sexto',
		anno: 1975
	},
	{
		titulo: 'La fortaleza',
		anno: 2012
	}
]

const filtro = libros
	.filter(function(libro) {
		return libro.anno >= 1970 && libro.anno <= 2000
	})
	.sort(function(a, b) {
		return a.anno - b.anno
	})

console.log(filtro)
