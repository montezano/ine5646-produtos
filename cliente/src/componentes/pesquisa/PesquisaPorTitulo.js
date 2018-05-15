import React from 'react'
import FalhaNaConexao from '../util/FalhaNaConexao'

class PesquisaPorTitulo extends React.Component {
  state = {
    pesquisando: false,
    livros: undefined,
    tituloLivro : undefined,
    erroTitulo: undefined,
    falhaNaConexao: false
  }


  render () {
    if (this.state.falhaNaConexao)
    return (
      <FalhaNaConexao
        rotuloBotao = 'Encerrar Pesquisa'
        onCancele = {this.props.onCancele}/>
    )

    return (
      <div>
        <h3>FIXME : Implementar</h3>
        <p>Defina o código JSX necessário para que o usuário possa
          pesquisar livros pelo título.
        </p>
        <h5>Dica</h5>
        <p>Analise o código existente nas classes <b>PesquisaPorId</b> e <b>PesquisaTodos</b>.
        </p>
      </div>
    )
  }
}

export default PesquisaPorTitulo
