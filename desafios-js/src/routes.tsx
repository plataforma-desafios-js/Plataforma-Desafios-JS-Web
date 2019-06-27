import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

  
import './App.css';
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro';
import Landing from './Pages/Landing/Landing';
import Home from './Pages/Home/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/home" component={Home} />

        </Switch>
    </BrowserRouter>
  );
}

export default Routes;