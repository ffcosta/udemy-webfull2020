// rest junta e spread(espalha)

//spread
const funcionario = {nome: 'Maria', salario: 12345.67}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
