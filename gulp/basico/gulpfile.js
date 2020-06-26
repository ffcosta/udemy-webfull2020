const gulp = require('gulp')
// const series = gulp.series 
 // ou const {series} = require('gulp')
 const {series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(cb){
    // gulp('pastaA/**/*.txt')
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    .pipe(gulp.dest('pastaB'))
    return cb()
}
const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

module.exports.default = series(
    // antes1,
    // antes2,
    parallel(antes1, antes2),
    copiar,
    fim
    )

