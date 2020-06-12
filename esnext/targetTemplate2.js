function real(partes, ...valores){
    resultado = []
    valores.forEach((valor, indice) =>{
        valor = isNaN(valor) ? valor : `R$ ${String( valor.toFixed(2)).replace('.', ',')}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} está ${precoParcela}`)