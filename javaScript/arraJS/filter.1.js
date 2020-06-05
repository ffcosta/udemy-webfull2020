Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const carrinho =[
    {nome: 'Borracha', preco: 3.45},
    {nome: 'Caderno', preco: 13.90},
    {nome: 'kit de Lapis', preco: 41.22},
    {nome: 'Caneta', preco: 7.50}
]
const result = carrinho.filter2(function(p){
    // return false
    // return true

    return p.preco > 40.0
})
console.log(JSON.parse(JSON.stringify(result[0])).nome)