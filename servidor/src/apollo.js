import { makeExecutableSchema } from 'graphql-tools'
import {pesquisaPorId, pesquisaTodosProdutos, pesquisaPorTitulo, salva} from './banco'
// The GraphQL schema in string form
const typeDefs = `
  type Query { produtos: [Produto], produtoPorId (nome: String!): Produto, produtoPorNome (nome: String!): Produto }
  type Produto { id: String, nome: String, categoria: String, descricao: String, vendedor: String, v: String}
  type Mutation {
    cadastraProduto ( nome: String!, categoria: String!, descricao: String, vendedor: String): Boolean
  }
`

// The resolvers
const resolvers = {
    Query: {
        produtos: () => pesquisaTodosProdutos().,
        produtoPorId: (root, res, {nome}) => pesquisaPorId(res, nome),
        produtoPorNome: (root, res, {nome}) => pesquisaPorTitulo(res, nome)
    },
    Mutation: {
        cadastraProduto: (root, {nome, categoria, descricao, vendedor}) => salva(nome, categoria, descricao, vendedor)
    }
}

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema
