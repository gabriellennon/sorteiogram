import React from 'react';
import { Home } from './pages/Home';
import { Nomes } from './pages/Nomes';
import { AmigoSecreto } from './pages/AmigoSecreto';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { SorteioNumeros } from './pages/SorteioNumeros';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          path="/"
          component={Home}
          exact
        />
        <Route 
          path="/sorteio/numeros"
          component={SorteioNumeros}
        />
        <Route 
          path="/sorteio/nomes"
          component={Nomes}
        />
        <Route 
          path="/sorteio/amigo-secreto"
          component={AmigoSecreto}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
