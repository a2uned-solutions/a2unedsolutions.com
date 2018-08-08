import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#527435' },
    secondary: { main: '#f5f6f7' },
  },
  typography: {
    htmlFontSize: 20,
    fontFamily: [
      'Nunito Sans',
      'sans-serif',
    ].join(','),
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
