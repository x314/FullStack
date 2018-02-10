
class Animal {
  constructor(raza, tipoAnimal, alimento) {
    this.raza = raza
    this.tipoAnimal = tipoAnimal
    this.tipoAlimento = alimento

    console.log('Se ejecuto el constructor')
  }

  descripcion() {
    return `Es un ${this.tipoAnimal} de raza ${this.raza}`
  }

  static todasLasRazas() {
    return 'Siberiano, Shitzu, Pekines'
  }

  get alimentacion() {
    return this.tipoAlimento
  }

  set alimentacion(alimento) {
    this.tipoAlimento = alimento
  }
}

const animal = new Animal('Siberiano', 'Canino', 'Huesos')
console.log(Animal.descripcion())
console.log(Animal.tipoAnimal())

animal.alimentacion = 'Pavo'
console.log(Animal.alimentacion)

console.log(Animal.todasLasRazas())
