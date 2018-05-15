import React from 'react';
import SvgIcon from 'material-ui/SvgIcon'
import FileCloud from 'material-ui/svg-icons/file/cloud';
import FileCloudOff from 'material-ui/svg-icons/file/cloud-off';

const IconeConexao = (props) => {
  const icone = props.conectado ? <FileCloud /> : <FileCloudOff />

  return <SvgIcon>{icone}</SvgIcon>

}

export default IconeConexao
