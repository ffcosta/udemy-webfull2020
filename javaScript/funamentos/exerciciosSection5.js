//divisivel por 3
const divisivel = num =>  Number.isInteger((num / 3))
console.log(divisivel(39))

//fatorial
const fatorial = num => num === 1 ? num : num * fatorial(num - 1)
console.log(fatorial(6))

notas = [2.3, 4.3, 5.6, 6.0, 7.2, 8.5, 9.6, 9.8]

const notasD = notass => notass.filter(nota => nota < 5.0)
console.log(notasD(notas))

const notasC = nota => nota > 4.9 && nota < 7.0
console.log(notas.filter(notasC))

const notasB = nota => nota > 6.9 && nota < 9.0
console.log(notas.filter(notasB))

const notasA = nota => nota > 8.9 && nota <= 10.0
console.log(notas.filter(notasA))