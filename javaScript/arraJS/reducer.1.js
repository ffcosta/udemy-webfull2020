const carrinho =[
    {nome: 'Borracha', preco: 3.45},
    {nome: 'Caderno', preco: 13.90},
    {nome: 'kit de Lapis', preco: 41.22},
    {nome: 'Caneta', preco: 7.50}
]
const result = carrinho.map(a => a.preco).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)
console.log(result)