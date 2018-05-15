import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

const FalhaNaConexao = (props) =>
  <div>
    <h3>Sem acesso ao banco de dados. Tente novamente mais tarde.</h3>
    <RaisedButton label = {props.rotuloBotao}  onClick={props.onCancele}/>
  </div>

export default FalhaNaConexao
