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
          onDesconecte = {props.desconecte}
          onSobre = {props.mostreSobre} />
    } else {
      menu =
        <MenuInicial
          onConecte = {props.conecte}
          onSobre = {props.mostreSobre} />
    }

  return menu
}

export default MenuApp
