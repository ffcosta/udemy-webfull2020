const bodyParser = require('body-parser')

const app = require('express')()
const boryParser = require('body-parser')
const { response } = require('express')

app.use(bodyParser.urlencoded({extended: true}))

// app.get('/usuarios', (req, res, next) => {
//     console.log(req.query)
//     console.log(req.body)
//     res.send('<h1>Parabéns Usuário incluído!<h1/>')
// })

app.post('/usuarios', (req, res, next) => {
    console.log(req.body)
    res.send('<h1>Parabéns Usuário incluído!<h1/>')
})

app.post('/usuarios/:id', (req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns. Usuário Alterado!<h1/>')
})

app.listen(3003, () =>{
    console.log('Linstenin on 3003')
})