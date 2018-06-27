import express from 'express'
import bodyParser from 'body-parser'
import * as banco from './banco'
import cors from 'cors'

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from './apollo'
import * as autenticacao from './autenticacao'

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use(express.static('../publico'))

banco.conecta()

app.get('/autenticado', (req, res) => {
        const user = req.query.user
        banco.autenticado(res, user)
    }
)

app.get('/', function(req, res){
    autenticacao.autentique(req.query.user)
    res.redirect('http://localhost:3000')
})

// app.get('/desconecta', (req, res) => banco.desconecta(res))

app.post('/salva', (req, res) => {

    if(autenticacao.autenticado()) {
        const nome = req.body.nome
        const categoria = req.body.categoria
        const descricao = req.body.descricao
        const vendedor = autenticacao.logado()
        console.log(vendedor)
        banco.salva(res, nome, categoria, descricao, vendedor)
    } else
        () => res.json({salvou: false})

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

// app.get('/apagaTudo', (req, res) => {
//     if(autenticacao.autenticado()) {
//         banco.apagaTudo(res))
//     }
//
//
// }

app.get('/apagaPorId', (req, res) => {
        const id = req.query.id
        const vendedor = autenticacao.logado();
        banco.apagaPorId(res, id, vendedor)
})

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(3001, () => console.log('No ar, porta 3001...'))
