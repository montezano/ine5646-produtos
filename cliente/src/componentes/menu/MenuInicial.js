import React, { Component } from 'react'

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


class MenuInicial extends Component {
  constructor (props) {
    super(props)

    this.paperStyle = {
      display: 'inline-block'
    }
  }

  render () {
    return (
      <Paper zDepth = {5} style = {this.paperStyle}>
        <Menu>
          <MenuItem
            primaryText = 'Você não está autenticado'
            onClick = {this.props.onAutentique}/>
          <MenuItem
            primaryText = 'Sobre...'
            onClick = {this.props.onSobre}/>
        </Menu>
      </Paper>
    )
  }
}

export default MenuInicial
