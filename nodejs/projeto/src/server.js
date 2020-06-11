const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const port = 3003
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
})
app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})
app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        name: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        name: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})