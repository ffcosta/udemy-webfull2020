array = ['sfsdf', 111, 'asfsdf']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
array.forEach(imprimir);
array.forEach(fabricante => console.log(fabricante))