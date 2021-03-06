import React, { Component } from 'react'

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

import Sobre from './sobre/Sobre'
import MenuApp from './menu/MenuApp'
import Cadastro from './cadastro/Cadastro'
import Remocao from './remocao/Remocao'
import Pesquisa from './pesquisa/Pesquisa'
import IconeConexao from './util/IconeConexao'
import servicos from '../servicos/servicos'

class App extends Component {
  acao = {
    NADA: 'nada',
    AUTENTICAR: '',
    DESCONECTAR: 'desconectar',
    MOSTRAR_SOBRE: 'mostrar sobre',
    APAGAR_SOBRE: 'apagar sobre',
    CADASTRAR: 'cadastrar',
    REMOVER: 'remover',
    FECHAR_CADASTRO: 'fechar cadastro',
      FECHAR_REMOVE: 'fechar remove',
      PESQUISAR: 'pesquisar',
    FECHAR_PESQUISA: 'fechar pesquisa'
  }

  state = {
    executando: this.acao.NADA,
    conectado: true,
    mostrandoMenu: false,
    mostrarIconeMenu: true
   }

  toggleMenu = () =>
    this.setState(prevState => ({mostrandoMenu: !this.state.mostrandoMenu}))

  autentique = () => {
    const a = this.acao
    const qdoConectar = {conectado: true, executando: a.NADA}
    const qdoNaoConectar = {conectado: false, executando: a.NADA}
    const qdoConectando = {mostrandoMenu: false, executando: a.AUTENTICAR}

    servicos
      .autentica({usuario: "Leo"})
        .then(r => {
            if (r.autenticado)
                this.setState(prevState => (qdoConectar))
            else
                this.setState(prevState => (qdoNaoConectar))
        })
      .catch(() => this.setState(prevState => (qdoNaoConectar)))

    this.setState(prevState => (qdoConectando))
  }

  desconecte = () => {
    const a = this.acao
    const qdoDesconectar = {conectado: false, executando: a.NADA}
    const qdoNaoDesconectar = {conectado: true, executando: a.NADA}
    const qdoDesconectando = {mostrandoMenu: false, executando: a.DESCONECTAR}

    servicos
      .desconecta()
      .then(() => this.setState(prevState => (qdoDesconectar)))
      .catch(() => this.setState(prevState => (qdoNaoDesconectar)))

    this.setState(prevState => (qdoDesconectando))
  }

  mostreSobre = () => {
    const novoEstado = {
      executando: this.acao.MOSTRAR_SOBRE,
      mostrandoMenu: false
    }

    this.setState(prevState => (novoEstado))
  }

  fecheSobre = () => {
    const novoEstado = {
       mostrandoMenu: false,
       executando: this.acao.APAGAR_SOBRE
     }

    this.setState(prevState => (novoEstado))
  }

  cadastre = () => {
    const novoEstado = {
      mostrandoMenu: false,
      executando: this.acao.CADASTRAR,
      mostrarIconeMenu: false
    }
    this.setState(prevState => (novoEstado))
  }

    remover = () => {
        const novoEstado = {
            mostrandoMenu: false,
            executando: this.acao.REMOVER,
            mostrarIconeMenu: false
        }
        this.setState(prevState => (novoEstado))
    }

  pesquise = () => {
    const novoEstado = {
      mostrandoMenu: false,
      executando: this.acao.PESQUISAR,
      mostrarIconeMenu: false
    }
    this.setState(prevState => (novoEstado))
  }

  fecheCadastro = () => {
    const novoEstado = {
      executando: this.acao.FECHAR_CADASTRO,
      mostrarIconeMenu: true
    }
    this.setState(prevState => (novoEstado))
  }

    fecheRemove = () => {
        const novoEstado = {
            executando: this.acao.FECHAR_REMOVE,
            mostrarIconeMenu: true
        }
        this.setState(prevState => (novoEstado))
    }

  fechePesquisa = () => {
    const novoEstado = {
      executando: this.acao.FECHAR_PESQUISA,
      mostrarIconeMenu: true
    }
    this.setState(prevState => (novoEstado))
  }


  //
  // -------- Gera a view
  //

  render() {
    let menu

    if (this.state.mostrandoMenu)
      menu = <MenuApp
        conectado = {this.state.conectado}
        mostreSobre = {this.mostreSobre}
        autentique = {this.autentique}
        desconecte = {this.desconecte}
        cadastre = {this.cadastre}
        remover = {this.remover}
        pesquise = {this.pesquise}/>

    const conteudo = this.__definaConteudo(this.state.executando)

    const iconeConexao = <IconeConexao conectado={this.state.conectado} />

    return (
      <Paper zDepth={4}>
        <AppBar
          title='Super Store - Cadastro de Produtos'
          onLeftIconButtonClick={this.toggleMenu}
          iconElementRight={iconeConexao}
          showMenuIconButton={this.state.mostrarIconeMenu}/>
        {menu}
        {conteudo}
      </Paper>
    )
  }


  __definaConteudo = (executando) => {
    let conteudo
    const a = this.acao

    switch (executando) {
      case a.NADA:
        conteudo = <h3>Bem-vindo ao sistema.</h3>
        break
      case a.AUTENTICAR:
        conteudo = <h3>Autenticando...</h3>
        break
      case a.DESCONECTAR:
        conteudo = <h3>Desconectando...</h3>
        break
      case a.MOSTRAR_SOBRE:
        conteudo = <Sobre onClick={this.fecheSobre}/>
        break
      case a.APAGAR_SOBRE:
        conteudo = <h3>Bem-vindo ao sistema.</h3>
        break
      case a.CADASTRAR:
        conteudo = <Cadastro onCancele={this.fecheCadastro}/>
        break
      case a.REMOVER:
        conteudo = <Remocao onCancele={this.fecheRemove}/>
        break
      case a.FECHAR_CADASTRO:
        conteudo = <h3>Bem-vindo ao sistema</h3>
        break
      case a.FECHAR_REMOVE:
        conteudo = <h3>Bem-vindo ao sistema</h3>
        break
      case a.PESQUISAR:
        conteudo = <Pesquisa onCancele={this.fechePesquisa}/>
        break
      case a.FECHAR_PESQUISA:
        conteudo = <h3>Bem-vindo ao sistema</h3>
        break

      default:
        conteudo = <h4>Erro: acao ainda não tratada ===> {this.state.executando}</h4>
    }
    return conteudo
  }

}

export default App
