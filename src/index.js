import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for React 18
root.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
);
