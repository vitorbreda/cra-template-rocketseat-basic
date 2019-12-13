import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

import './config/ReactotronConfig';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
