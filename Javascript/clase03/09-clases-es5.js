
function Animal() {
  this.raza = 'Siberiano'
  this.tipo = 'canino'

  this.descripcion = function () {
    return this.raza + ' - ' + this.tipo
  }
}

Animal.prototype.tipoAnimal = function () {
  return this.tipo
}

const animal = new Animal()
console.log(animal.descripcion())
