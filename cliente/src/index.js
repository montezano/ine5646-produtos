import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const M = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <App/>
  </MuiThemeProvider>
)
ReactDOM.render(<M/>, document.getElementById('root'));
