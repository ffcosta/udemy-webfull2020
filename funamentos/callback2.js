const notas = [10, 3.9, 6.7, 8.8, 9.5]

console.log(notas)

let notasBaixas = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas)

notasMenor7 = nota => nota < 7

let notasBaixas2 = notas.filter(notasMenor7/*nota => nota < 7*/)
console.log(notasBaixas2)