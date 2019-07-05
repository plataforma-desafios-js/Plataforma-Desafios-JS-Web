import React from 'react';
import './App.css';
import Routes from './routes';
import { Provider } from './Contextos/ContextoAutenticacao';

const App: React.FC = () => {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
