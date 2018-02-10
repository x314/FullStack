
function* generador() {
  console.log('se ejecuto paso 1')
  yield 'paso 1'
  console.log('se ejecuto paso 2')
  yield 'paso 2'
  console.log('se ejecuto paso 3')
}

const gen = generador()
gen.next() // paso 1
gen.next() // paso 2
gen.next() // paso 3
// console.log(gen)
