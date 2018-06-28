import React, {Component} from 'react';

import {Card, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

// const CATEGORIA = require('../data/categoria');

class FormRemocao extends Component {
    state = {
        id: undefined,
        erroId: undefined
    }

    podeRemover() {
        const s = this.state
        return s.erroId === undefined &&
            s.id !== undefined
    }

    altereId = (ev, valor) => {
        if (valor === '') {
            this.setState(prevState => ({erroId: 'Campo obrigatório'}))
        } else {
            this.setState(prevState => ({id: valor, erroId: undefined}))
        }
    }

    facaRemocao = () => {
        const dados = {
            id: this.state.id
        }
        this.props.onRemove(dados)
    }

    render() {
        return (
            <Card>
                <CardText>
                    <TextField
                        hintText='digite nome id do produto'
                        floatingLabelText='Id do Produto'
                        errorText={this.state.erroId}
                        onChange={this.altereId}/>
                </CardText>
                <CardActions>
                    <RaisedButton
                        label="Remover"
                        disabled={!this.podeRemover()}
                        onClick={this.facaRemocao}/>

                    <RaisedButton
                        label="Cancelar"
                        onClick={this.props.onCancele}/>
                </CardActions>
            </Card>
        )
    }
}

export default FormRemocao
