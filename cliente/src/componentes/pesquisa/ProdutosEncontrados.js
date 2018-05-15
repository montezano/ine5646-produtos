import React, {Component} from 'react'

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class ProdutosEncontrados extends Component {

    __monteTabela(livros) {
        const linhas = this.__monteLinhas(livros)
        return <Table>
            <TableHeader displaySelectAll={false}>
                <TableRow>
                    <TableHeaderColumn>Num</TableHeaderColumn>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Nome</TableHeaderColumn>
                    <TableHeaderColumn>Categoria</TableHeaderColumn>
                    <TableHeaderColumn>Descrição</TableHeaderColumn>
                    <TableHeaderColumn>Vendedor</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {linhas}
            </TableBody>
        </Table>
    }

    __monteLinhas(produtos) {
        return produtos.map((produto, indice) => (
            <TableRow key={indice}>
                <TableRowColumn>{indice + 1}</TableRowColumn>
                <TableRowColumn>{produto._id}</TableRowColumn>
                <TableRowColumn>{produto.nome}</TableRowColumn>
                <TableRowColumn>{produto.categoria}</TableRowColumn>
                <TableRowColumn>{produto.descricao}</TableRowColumn>
                <TableRowColumn>{produto.vendedor}</TableRowColumn>
            </TableRow>
        ))
    }

    render() {
        let conteudo

        if (this.props.livros !== undefined)
            if (this.props.livros.length === 0)
                conteudo = <h3>Nenhum produto encontrado</h3>
            else
                conteudo = this.__monteTabela(this.props.livros)

        return (<div>{conteudo}</div>)
    }
}

export default ProdutosEncontrados
