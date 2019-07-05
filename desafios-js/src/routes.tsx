import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

  
import './App.css';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Perfil from './Pages/Perfil';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/home" component={Home} />
            <Route path="/perfil" component={Perfil} />
            

        </Switch>
    </BrowserRouter>
  );
}

export default Routes;