/* eslint-disable react/jsx-no-undef */
import "./Header.css";
import React from "react";
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <header className="header d-none d-sm-flex flex-column">
    <nav className="menu">
      <Link to="/">
        <i class="fa fa-home " aria-hidden="true"></i> Inicio
      </Link>
      <Link to="/posts">
        <i class="fa fa-book " aria-hidden="true"></i> Publicações
      </Link>
      <Link to="/apresentation">
        <i class="fa fa-area-chart " aria-hidden="true"></i> Apresentações
      </Link>
      <Link to="/workshop">
        <i class="fa fa-briefcase " aria-hidden="true"></i> Workshops
      </Link>
      <Link to="/portfolio">
        <i class="fa fa-address-book " aria-hidden="true"></i> Portifolio
      </Link>
    </nav>
  </header>
);
