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
            Esta aplicação permite que dados sobre livros sejam armazenados
            em um banco MongoDB.
          </CardText>
          <CardHeader title='Tecnologias'/>
          <CardText>
            Bibliotecas utilizadas: Mongoose para acessar o banco e Material-UI
            para os componentes React.
          </CardText>
        </Card>
      </Dialog>
    )
  }
}

export default Sobre
