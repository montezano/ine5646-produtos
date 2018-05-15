import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import {Card, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField'

import FalhaNaConexao from '../util/FalhaNaConexao'
import ProdutosEncontrados from './ProdutosEncontrados'
import servicos from '../../servicos/servicos'

class PesquisaPorId extends React.Component {
  state = {
    pesquisando: false,
    produto: undefined,
    idProduto : undefined,
    erroID: undefined,
    falhaNaConexao: false
  }

  pesquisePorId = () => {
    servicos.pesquisePorId(this.state.idProduto)
      .then((resposta) => this.__registreResposta(resposta))
      .catch(() => this.__registreFalhaNaConexao())

    const novoEstado = {
      pesquisando: true,
      produto: undefined
    }

    this.setState(prevState => (novoEstado))
  }

  __registreResposta = (livroOuNull) => {
    const novoEstado = {
        pesquisando: false,
        produto: livroOuNull
    }

    this.setState(prevState => (novoEstado))
  }

  __registreFalhaNaConexao = () => {
    this.setState(prevState => ({falhaNaConexao: true}))
  }

  altereID = (ev, valor) => {
    if (valor === '')
      this.setState(prevState => ({erroID: 'Campo obrigatório'}))
    else {
      const novoEstado = {
        erroID: undefined,
        idProduto: valor,
        produto: undefined
      }
      this.setState(prevState => (novoEstado))
    }
  }

  __naoPodePesquisar = () => {
    return this.state.idProduto === undefined ||
           this.state.pesquisando ||
           this.state.erroID !== undefined
    }

  render () {
    if (this.state.falhaNaConexao)
      return (
        <FalhaNaConexao
          rotuloBotao = 'Encerrar Pesquisa'
          onCancele = {this.props.onCancele}/>
      )

    let produtos

    if (this.state.produto === null)
      produtos = []
    else
      if (this.state.produto !== undefined)
        produtos = [this.state.produto]

    return (
        <Paper>
          <Card>
            <CardText>
              <TextField
                hintText='digite o ID do Produto'
                floatingLabelText='ID do Produto'
                errorText={this.state.erroID}
                onChange={this.altereID}/>
            </CardText>

            <CardActions>
              <RaisedButton
                label='Pesquisar'
                onClick={this.pesquisePorId}
                disabled={this.__naoPodePesquisar()}/>
              <RaisedButton
                label='Encerrar pesquisa'
                onClick={this.props.onCancele}
                disabled={this.state.pesquisando}/>
            </CardActions>
            <CardText>
              <ProdutosEncontrados livros={produtos}/>
            </CardText>
          </Card>
        </Paper>
    )
  }
}

export default PesquisaPorId
