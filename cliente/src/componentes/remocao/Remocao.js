import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

import servicos from '../../servicos/servicos'
import FormRemocao from './FormRemocao'

class Remocao extends Component {
    state = {
        msg: undefined,
        removerNovamente: false
    }

    facaRemocao = (dados) => {
        console.log(dados)
        servicos.remove(dados)
            .then((r) => this.registreResultado(r))
            .catch(() => this.setState(prevState => ({msg: 'Não conseguiu salvar!'})))
        this.setState(prevState => ({msg: undefined, removerNovamente: false}))
    }

    registreResultado = (r) => {
        if(r.removeu) {
            const novoEstado = {
                msg: `Produto removido!`,
                removerNovamente: true
            }
            this.setState(prevState => (novoEstado))
        } else {
            const novoEstado = {
                msg: `Não autorizado`,
                removerNovamente: false
            }
            this.setState(prevState => (novoEstado))
        }
    }

    facaNovaRemocao = () => {
        const novoEstado = {
            msg: undefined,
            removerNovamente: false
        }

        this.setState(prevState => (novoEstado))
    }

    decidaSeRemoveNovamente = (ev, valor) => {
        if (valor === 1)
            this.facaNovaRemocao()
        else
            this.props.onCancele()
    }

    render () {
        let conteudo
        let msg

        if (this.state.msg !== undefined)
            msg = <h4>{this.state.msg}</h4>

        if (this.state.removerNovamente) {
            conteudo =
                <div>
                    <h4>Cadastrar mais um?</h4>
                    <RadioButtonGroup
                        name='outro'
                        onChange={this.decidaSeRemoveNovamente}>
                        <RadioButton value={1} label={'Sim'}/>
                        <RadioButton value={0} label={'Não'}/>
                    </RadioButtonGroup>
                </div>
        }
        else
            conteudo =
                <FormRemocao
                    onRemove={this.facaRemocao}
                    onCancele={this.props.onCancele}/>


        return (
            <Paper>
                <Card>
                    <CardHeader title='Remover Produto'/>
                    <CardText>
                        {conteudo}{msg}
                    </CardText>
                </Card>
            </Paper>
        )
    }
}

export default Remocao
