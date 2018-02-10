
const registros = [
	{
		facebook: 'https://facebook.com/usuario01',
		google: 'https://googleplus.com/usuario01',
		twitter: 'https://twitter.com/usuario01'
	},
	{
		facebook: 'https://facebook.com/usuario02',
		google: 'https://googleplus.com/usuario02',
		instagram: 'https://twitter.com/usuario02'
	},
	{
		facebook: 'https://facebook.com/usuario03'
	},
	{
		google: 'https://googleplus.com/usuario04',
		tinder: 'https://tinder.com/usuario04'
	}
]

const filas = registros.map(registro => {
	const {
		facebook = 'no tiene fb', 
		google = 'no tiene fb', 
		twitter = 'no tiene fb', 
		instagram = 'no tiene fb', 
		tinder = 'no tiene fb'
	} = registro
	return `
			<tr>
				<td>${facebook}</td>
				<td>${google}</td>
				<td>${twitter}</td>
				<td>${instagram}</td>
				<td>${tinder}</td>
			</tr>
			`
})

console.log(filas)
