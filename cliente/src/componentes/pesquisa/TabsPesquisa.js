import React, {Component} from 'react'

import {Tabs, Tab} from 'material-ui/Tabs'

import PesquisaTodos from './PesquisaTodos'
import PesquisaPorId from './PesquisaPorId'
import PesquisaPorTitulo from './PesquisaPorTitulo'

class TabsPesquisa extends Component {
  state = {
    tab: 'todos',
  }

  mudeParaTab = (tab) => {
      this.setState(prevState => ({tab}))
  }

  render () {

    return (
      <Tabs value={this.state.tab} onChange={this.mudeParaTab}>

        <Tab label='Pesquisar Todos' value='todos'>
          <PesquisaTodos onCancele={this.props.onCancele}/>
        </Tab>

        <Tab label='Pesquisar por Id' value='id'>
          <PesquisaPorId onCancele={this.props.onCancele}/>
        </Tab>

        <Tab label='Pesquisar por Título' value='titulo'>
          <PesquisaPorTitulo onCancele={this.props.onCancele}/>
        </Tab>

      </Tabs>
    )
  }
}

export default TabsPesquisa
