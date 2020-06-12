function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(!frase.includes('legal')) resolve(frase)
            reject('Não permitido')
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e))