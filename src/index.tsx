import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './them';
import GlobalStyles from './Components/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles/>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
