const imprimir = function (a, b){
    console.log(a + b)
}
imprimir(2,3)

const soma = (a, b) => {
    return a + b
}
console.log(soma(3,3))

const subtracao = (a, b) => a + b
console.log(subtracao(9, 7))

var numero = 1
{
    let numero2 = 2
    console.log('dentro =', numero2)
    console.log('dentro =', numero)
}
console.log('fora=', numero)


const funcs = []

// for(var i = 0; i < 10; i++){
//     funcs.push(function(){
//         console.log(i)
//     })
// }
// funcs[2]()
// funcs[8]()

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()