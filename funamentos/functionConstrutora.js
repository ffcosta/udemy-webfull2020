console.log(soma(3,4 ))
function Carro(maxima = 200, delta = 5){
    let velociadeAtual = 0 // privado

    //publico
    this.acelerar = _ => velociadeAtual + delta <= maxima ?  velociadeAtual += delta : velociadeAtual = maxima
   
    //publico
    this.getVelocidadeAtual = _ => velociadeAtual
    
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

function soma(x, y){
    return x + y
}