const [a] = [10]
console.log(a)

const [n1, ,n3, ,n5, n6 = 0] = [10,7,9, 8]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[,8, 8], [9,6,8]]
console.log(nota)

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({min: 900}))
const obj  = {max: 22, min: 29}
console.log(rand(obj))

function rand2([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand2([50, 40]))