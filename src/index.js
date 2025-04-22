// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import GlobalStyles from './styles/GlobalStyles';
import shelbiTeal from 'react95/dist/themes/shelbiTeal';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={shelbiTeal}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
