import React from 'react';
import { render } from 'react-snapshot';
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

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
