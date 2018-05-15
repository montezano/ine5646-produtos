import express from 'express'
import bodyParser from 'body-parser'
import * as banco from './banco'

const app = express()

app.use(bodyParser.json())

app.use(express.static('../publico'))

app.get('/conecta', (req, res) => banco.conecta(res))

app.get('/desconecta', (req, res) => banco.desconecta(res))

app.post('/salva', (req, res) => {
  const nome = req.body.nome
  const categoria = req.body.categoria
  const descricao = req.body.descricao
    const vendedor = req.body.vendedor
  banco.salva(res, nome, categoria, descricao, vendedor)
})

app.get('/pesquisaPorId', (req, res) => {
  const id = req.query.id
  banco.pesquisaPorId(res, id)
})

app.get('/pesquisaTodos', (req, res) => banco.pesquisaTodos(res))

app.get('/pesquisaPorNome', (req, res) => {
  const produto = req.query.nome
  banco.pesquisaPorTitulo(res, produto)
})

app.get('/apagaTudo', (req, res) => banco.apagaTudo(res))

app.get('/apagaPorId', (req, res) => {
  const id = req.query.id
  banco.apagaPorId(res, id)
})

app.listen(3001, () => console.log('No ar, porta 3001...'))
