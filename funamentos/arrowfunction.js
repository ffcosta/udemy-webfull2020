let dobro = function(a){
    return 2 * a
}
console.log(dobro(11))

dobro = (a) =>{
    return 2 * a
}
console.log(dobro(4))

dobro = a => 2 * a
console.log(dobro(8))

let ola = function(){
    return 'ola'
}
ola = () => 'ola' //forma padrao
ola = _ => 'ola' // possui um parametro
console.log(ola())

function Pessoa(){
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa