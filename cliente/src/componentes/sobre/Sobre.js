import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/FlatButton'
import {Card, CardHeader, CardText} from 'material-ui/Card'

class Sobre extends Component {
  render () {
    const acoes = [<RaisedButton label='Ok' onClick={this.props.onClick}/>]

    return (
      <Dialog title='Sobre' modal={true} open={true} actions={acoes}>
        <Card>
          <CardHeader title='Finalidade'/>
          <CardText>
            Aplicação que permite o cadastro de produtos.
          </CardText>
        </Card>
      </Dialog>
    )
  }
}

export default Sobre
