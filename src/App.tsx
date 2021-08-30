import React from 'react';
import { Home } from './pages/Home';
import { Nomes } from './pages/Nomes';
import { SorteioNumeros } from './pages/SorteioNumeros';
import { NavBar } from './components/navBar';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
