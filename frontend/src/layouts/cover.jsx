import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from "react-router-dom";
import Inicio from '.././views/Inicio';
import Atualizacoes from '.././views/Atualizacoes';
import Contato from '.././views/Contato';
import MenuPrincipal from '.././components/MenuPrincipal';
import Rodape from '.././components/Rodape';

const LayoutCover = () => (
  <Router>
    <div className="container d-flex h-100 p-3 mx-auto flex-column">
      <MenuPrincipal />
      <Redirect from="/" to="/inicio" />
      <Route exact path="/inicio" component={Inicio} />
      <Route path="/atualizacoes" component={Atualizacoes} />
      <Route path="/contato" component={Contato} />
      <Rodape />
    </div>
  </Router>
);

export default LayoutCover;
