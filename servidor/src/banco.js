import mongoose from 'mongoose'

const MONGODB_PRODUTOS = process.env.MONGODB_PRODUTOS

if (MONGODB_PRODUTOS === undefined) {
    console.log('\n----\n**ATENÇÃO: A variável de ambiente MONGODB_PRODUTOS não está definida!\n----')
    process.exit(1)
}

const produtoSchema = new mongoose.Schema({
    nome: String,
    categoria: String,
    descricao: String,
    vendedor: String
})

const vendedorSchema = new mongoose.Schema({
    nome: String,
    id: String
})

const Produto = mongoose.model('Produto', produtoSchema)

function autenticado(res, user) {
    console.log(user)
    if(user === 'Leo') {
        res.json({autenticado: true})
        console.log("autenticado")
    } else {
        res.json({autenticado: false})
        console.log("nao autenticado")
    }

}

function conecta() {
    mongoose.connect(MONGODB_PRODUTOS, {keepAlive: 200, autoReconnect: true})
}

// function desconecta(res) {
//     mongoose.disconnect().then(
//         () => res.json({desconectou: true}),
//         () => res.json({desconectou: false})
//     )
// }

function salva(res, nome, categoria, descricao, vendedor) {
    const produto = new Produto({nome: nome, categoria: categoria, descricao: descricao, vendedor: vendedor})
    produto.save().then(
        (produtoSalvo) => res.json({salvou: true, id: produtoSalvo._id}),
        () => res.json({salvou: false})
    )
}

function pesquisaPorId(res, id) {
    Produto.findById(id).then(
        (produto) => res.json(produto),
        () => res.json(null)
    )
}

function pesquisaTodos(res) {
    console.log('pesquisou')
    Produto.find().then(
        (produtos) => res.json(produtos),
        () => res.json([])
    )
}

function pesquisaPorTitulo(res, nome) {
    Produto.find().where('nome', new RegExp(nome)).then(
        (produtos) => res.json(produtos),
        () => res.json([])
    )
}

function apagaTudo(res) {
    Produto.remove().then(
        () => res.json({removeu: true}),
        () => res.json({removeu: false})
    )
}

// Obs: Sempre retorna true, mesmo quando id não existe
function apagaPorId(res, id, vendedor) {
    Produto.deleteOne({_id: id, vendedor: vendedor}).then(
        () => res.json({removeu: true}),
        () => res.json({removeu: false})
    )
}

function pesquisaTodosProdutos() {
    let ret = [];
    Produto.find({}, function(err, produtos) {
        delete produtos._id
        delete produtos.__v
        ret = produtos
        }).then(function(ret) {
            console.log(ret)
            return ret;
    })

    // Produto.find().where('nome', new RegExp(nome)).then(
    //     (produtos) => res.json(produtos),
    //     () => res.json([])
    // )
}

const copia = ({__id, nome, categoria, descricao, vendedor, __v}) => ({nome, categoria, descricao, vendedor})

export {
    autenticado, conecta, salva,
    pesquisaPorId, pesquisaTodos, pesquisaPorTitulo, apagaPorId, pesquisaTodosProdutos
}


