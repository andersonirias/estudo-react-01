import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.svg';

const MenuPrincipal = () => (
  <header className="masthead mb-auto">
    <div className="inner">
      <a href="/inicio">
        <img src={logo} className="masthead-brand"  alt="" width="72" height="72" />
      </a>
      <nav className="nav nav-masthead justify-content-center">
        <NavLink to="/inicio" className="nav-link" activeClassName="active" >Inicio</NavLink>
        <NavLink to="/atualizacoes" className="nav-link" activeClassName="active" >Atualizações</NavLink>
        <NavLink to="/contato" className="nav-link" activeClassName="active" >Contato</NavLink>
      </nav>
    </div>
  </header>
);

export default MenuPrincipal;
