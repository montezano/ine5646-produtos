import React, { Component } from 'react'

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider'


class MenuConectado extends Component {
  constructor (props) {
    super(props)

    this.paperStyle = {
      display: 'inline-block'
    }
  }

  render () {
    return (
      <Paper zDepth={5} style={this.paperStyle}>
        <Menu>
          <MenuItem
            primaryText = 'Cadastrar produto...'
            onClick = {this.props.onCadastre}/>
            <MenuItem
              primaryText = 'Pesquisar produto...'
              onClick = {this.props.onPesquise}/>
            <MenuItem
              primaryText = 'Remover produto...'
              onClick = {this.props.onRemove}/>
          <Divider/>
          <MenuItem
            primaryText = 'Desconectar do Banco de Dados'
            onClick = {this.props.onDesconecte}/>
          <Divider/>
          <MenuItem
            primaryText = 'Sobre'
            onClick = {this.props.onSobre}/>
        </Menu>
      </Paper>
    )
  }
}

export default MenuConectado
