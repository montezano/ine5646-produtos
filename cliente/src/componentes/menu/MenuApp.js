import React from 'react';
import MenuConectado from './MenuConectado'
import MenuInicial from './MenuInicial'

const MenuApp = (props) => {
  let menu

    if (props.conectado) {
      menu =
        <MenuConectado
          onCadastre = {props.cadastre}
          onPesquise = {props.pesquise}
          onRemove = {props.remover}
          onDesconecte = {props.desconecte}
          onSobre = {props.mostreSobre} />
    } else {
      menu =
        <MenuInicial
          onAutentique = {props.autentique}
          onSobre = {props.mostreSobre} />
    }

  return menu
}

export default MenuApp
