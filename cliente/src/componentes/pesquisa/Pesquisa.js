import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {Card, CardHeader, CardText} from 'material-ui/Card';

import TabsPesquisa from './TabsPesquisa'

class Pesquisa extends Component {

  render() {
    return (
      <Paper>
        <Card>
          <CardHeader title='Pesquisar Produto'/>
            <CardText>
              <TabsPesquisa onCancele={this.props.onCancele}/>
            </CardText>
        </Card>
      </Paper>
    )
  }
}

export default Pesquisa
