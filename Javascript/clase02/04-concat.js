
const remitos01 = ['Impresora Matricial HP', 'Toners para H1102', 'Multifuncional Xerox']
const remitos02 = ['Monitores HP', 'Laptop Lenovo', 'Varios']

const remitos = remitos01.concat(remitos02)
console.log(remitos)
console.log(remitos01)

const remitosPush = []
remitosPush.push(...remitos01)
remitosPush.push(...remitos02)
console.log(remitosPush)
