import React, {Component} from 'react'

import {Card, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormCadastro extends Component {
    state = {
        nome: undefined,
        erroNome: undefined,
        categoria: undefined,
        erroCategoria: undefined,
        descricao: undefined,
        erroDescricao: undefined,
        vendedor: "Lúcio",
        erroVendedor: undefined
    }

    podeCadastrar() {
        const s = this.state
        return s.erroNome === undefined &&
            s.erroCategoria === undefined &&
            s.erroDescricao === undefined &&
            s.erroVendedor === undefined &&
            s.nome !== undefined &&
            s.categoria !== undefined &&
            s.descricao !== undefined &&
            s.vendedor !== undefined
    }

    altereNome = (ev, valor) => {
        if (valor === '') {
            this.setState(prevState => ({erroNome: 'Campo obrigatório'}))
        } else {
            this.setState(prevState => ({nome: valor, erroNome: undefined}))
        }
    }

    altereCategoria = (ev, valor) => {
        if (valor === '') {
            this.setState(prevState => ({erroCategoria: 'Campo obrigatório'}))
        } else {
            this.setState(prevState => ({categoria: valor, erroCategoria: undefined}))
        }
    }

    altereDescricao = (ev, valor) => {
        if (valor > 0) {
            this.setState(prevState => ({descricao: valor, erroDescricao: undefined}))
        } else {
            this.setState(prevState => ({erroDescricao: 'Tem que ser número maior que zero'}))
        }
    }

    facaCadastro = () => {
        const dados = {
            nome: this.state.nome,
            categoria: this.state.categoria,
            descricao: this.state.descricao
        }
        this.props.onCadastre(dados)
    }

    render() {
        return (
            <Card>
                <CardText>
                    <TextField
                        hintText='digite nome do produto'
                        floatingLabelText='Nome do Produto'
                        errorText={this.state.erroNome}
                        onChange={this.altereNome}/>
                    <br/>
                    <TextField
                        hintText='selecione a categoria'
                        floatingLabelText='Categoria'
                        errorText={this.state.erroCategoria}
                        onChange={this.altereCategoria}/>
                    <br/>
                    <TextField
                        hintText='digite uma descrição para o produto'
                        floatingLabelText='Descrição'
                        errorText={this.state.erroDescricao}
                        onChange={this.altereDescricao}/>
                </CardText>
                <CardActions>
                    <RaisedButton
                        label="Cadastrar"
                        disabled={!this.podeCadastrar()}
                        onClick={this.facaCadastro}/>

                    <RaisedButton
                        label="Cancelar"
                        onClick={this.props.onCancele}/>
                </CardActions>
            </Card>
        )
    }
}

export default FormCadastro
