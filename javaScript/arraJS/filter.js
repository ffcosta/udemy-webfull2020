const carrinho =[
    {nome: 'Borracha', preco: 3.45},
    {nome: 'Caderno', preco: 13.90},
    {nome: 'kit de Lapis', preco: 41.22},
    {nome: 'Caneta', preco: 7.50}
]
const result = carrinho.filter(function(p){
    // return false
    // return true

    return p.preco > 40.0
})
console.log(JSON.parse(JSON.stringify( result[0])).nome)