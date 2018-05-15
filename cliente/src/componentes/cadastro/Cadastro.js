import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

import servicos from '../../servicos/servicos'
import FormCadastro from './FormCadastro'

class Cadastro extends Component {
  state = {
    msg: undefined,
    cadastrarNovamente: false
  }

  facaCadastro = (dados) => {
    servicos.cadastre(dados)
      .then((r) => this.registreResultado(r))
      .catch(() => this.setState(prevState => ({msg: 'Não conseguiu salvar!'})))
    this.setState(prevState => ({msg: undefined, cadastrarNovamente: false}))
  }

  registreResultado = (r) => {
    const novoEstado = {
      msg: `Produto cadastrado! Id: ${r.id}`,
      cadastrarNovamente: true
    }

    this.setState(prevState => (novoEstado))
  }

  facaNovoCadastro = () => {
    const novoEstado = {
      msg: undefined,
      cadastrarNovamente: false
    }

    this.setState(prevState => (novoEstado))
  }

  decidaSeCadastraNovamente = (ev, valor) => {
    if (valor === 1)
      this.facaNovoCadastro()
    else
      this.props.onCancele()
  }

  render () {
    let conteudo
    let msg

    if (this.state.msg !== undefined)
      msg = <h4>{this.state.msg}</h4>

    if (this.state.cadastrarNovamente) {
      conteudo =
        <div>
          <h4>Cadastrar mais um?</h4>
          <RadioButtonGroup
            name='outro'
            onChange={this.decidaSeCadastraNovamente}>
              <RadioButton value={1} label={'Sim'}/>
              <RadioButton value={0} label={'Não'}/>
          </RadioButtonGroup>
      </div>
      }
    else
      conteudo =
        <FormCadastro
          onCadastre={this.facaCadastro}
          onCancele={this.props.onCancele}/>


    return (
      <Paper>
        <Card>
          <CardHeader title='Cadastrar Produto'/>
            <CardText>
              {conteudo}{msg}
            </CardText>
        </Card>
      </Paper>
    )
  }
}

export default Cadastro
