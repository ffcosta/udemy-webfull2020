class Pessoa{
    constructor(name){
        this.name = name
    }
    falar(){
        console.log(`Meu nome é ${this.name}`)
    }
}
p1 = new Pessoa('Miguel')
p1.falar()
console.log(p1.name)
 const criarPessoa = nome => {
     return {
         falar: () => console.log(`Meu nome é ${nome}`)
     }
 }
 p3 = criarPessoa('Gabriel')