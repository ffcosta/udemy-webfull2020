const carrinho =[
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const resultado = carrinho.map(e => {
    return JSON.parse(e).preco
})
console.log(resultado)