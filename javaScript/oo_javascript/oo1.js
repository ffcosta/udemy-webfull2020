produto = new Object
produto.nome = 'carro'
produto['marca'] = 'agile'
produto.montadora = 'gm'
console.log(produto)

delete produto.montadora
console.log(produto)

//funcao construtora
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const prod = new Produto('agilessss')
console.log(prod.nome)

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('asdf', 90, 2)
console.log(f1.salarioBase)

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//deixa o objetivo constante 
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)
