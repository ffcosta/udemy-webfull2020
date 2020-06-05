const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice}: ${nome} - ${array}`)
})
aprovados.forEach(nome => console.log(nome))

exibirAprovados = nome => console.log(nome)
aprovados.forEach(exibirAprovados)