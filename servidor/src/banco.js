import mongoose from 'mongoose'
const MONGODB_PRODUTOS = process.env.MONGODB_PRODUTOS

if (MONGODB_PRODUTOS === undefined) {
  console.log('\n----\n**ATENÇÃO: A variável de ambiente MONGODB_PRODUTOS não está definida!\n----')
  process.exit(1)
}

const produtoSchema = new mongoose.Schema({
  nome: String,
  categoria: String,
  descricao: Number,
    vendedor: String
})

const Produto = mongoose.model('Produto', produtoSchema)

function conecta (res) {
  mongoose.connect(MONGODB_PRODUTOS, {keepAlive: 200}).then(
    () => res.json({conectou: true}),
    () => res.json({conectou: false})
  )
}

function desconecta (res) {
  mongoose.disconnect().then(
    () => res.json({desconectou: true}),
    () => res.json({desconectou: false})
  )
}

function salva (res, nome, categoria, descricao, vendedor) {
  const produto = new Produto({ nome: nome, categoria: categoria, descricao: descricao, vendedor: vendedor })
  produto.save().then(
    (produtoSalvo) => res.json({salvou: true, id: produtoSalvo._id}),
    () => res.json({salvou: false})
  )
}

function pesquisaPorId (res, id) {
  Produto.findById(id).then(
    (produto) => res.json(produto),
    () => res.json(null)
  )
}

function pesquisaTodos (res) {
  Produto.find().then(
    (produtos) => res.json(produtos),
    () => res.json([])
  )
}

function pesquisaPorTitulo (res, nome) {
  Produto.find().where('nome', new RegExp(nome)).then(
    (produtos) => res.json(produtos),
    () => res.json([])
  )
}

function apagaTudo (res) {
  Produto.remove().then(
    () => res.json({removeu: true}),
    () => res.json({removeu: false})
  )
}

// Obs: Sempre retorna true, mesmo quando id não existe
function apagaPorId (res, id) {
  Produto.deleteOne({_id: id}).then(
    () => res.json({removeu: true}),
    () => res.json({removeu: false})
  )
}
export {conecta, desconecta, salva,
  pesquisaPorId, pesquisaTodos, pesquisaPorTitulo, apagaTudo, apagaPorId}
