const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write(Date())
    res.end()
}).listen(8080)