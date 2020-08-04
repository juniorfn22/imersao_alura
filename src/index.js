import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/index';
import CadastroVideo from './pages/cadastro/Video/index';

import { BrowserRouter,Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/categoria';

const Erro404 = () => (<div>Erro 404 - Not Found</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/Video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Erro404} />
    </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);

