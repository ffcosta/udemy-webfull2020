const pessoa = {
    nome: 'Maria',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorada} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, CEP}} = pessoa
console.log(logradouro, numero, CEP)