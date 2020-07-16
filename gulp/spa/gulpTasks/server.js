const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function server(){
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
}

function monitorarArquivos(cb){
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    server
}