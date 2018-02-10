
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

class Mamifero extends Animal {
  constructor() {
    super('Shitzu', 'Canino', 'Pollo')
  }

  descripcion() {
    const mensaje = super.descripcion()
    return mensaje
    // return 'Este metodo es de la clase Mamifero'
  }
}

const mamifero  = new Mamifero()
console.log(mamifero.descripcion())
