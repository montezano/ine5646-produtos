import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import {Card, CardText, CardActions} from 'material-ui/Card';

import ProdutosEncontrados from './ProdutosEncontrados'
import servicos from '../../servicos/servicos'
import FalhaNaConexao from '../util/FalhaNaConexao'

class PesquisaTodos extends React.Component {
  state = {
    pesquisando: false,
    livros: undefined,
    falhaNaConexao: false
  }

  pesquiseTodos = () => {
    servicos.pesquiseTodos()
      .then((resposta) => this.__registreResposta(resposta))
      .catch(() => this.__registreFalhaNaConexao())

    const novoEstado = {
      pesquisando: true,
      livros: undefined
    }

    this.setState(prevState => (novoEstado))
  }

  __registreResposta = (livros) => {
    const novoEstado = {
        pesquisando: false,
        livros
    }

    this.setState(prevState => (novoEstado))
  }

  __registreFalhaNaConexao = () => {
    this.setState(prevState => ({falhaNaConexao: true}))
  }

  render () {
    if (this.state.falhaNaConexao)
      return (
        <FalhaNaConexao
          rotuloBotao = 'Encerrar Pesquisa'
          onCancele = {this.props.onCancele}/>
      )


    let livros = this.state.livros

    return (
        <Paper>
          <Card>

            <CardActions>
              <RaisedButton
                label='Pesquisar'
                onClick={this.pesquiseTodos}
                disabled={this.state.pesquisando}/>
              <RaisedButton
                label='Encerrar pesquisa'
                onClick={this.props.onCancele}
                disabled={this.state.pesquisando}/>
            </CardActions>
            <CardText>
              <ProdutosEncontrados livros={livros}/>
            </CardText>
          </Card>
        </Paper>
    )
  }
}

export default PesquisaTodos
