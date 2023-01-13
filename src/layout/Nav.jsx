/* eslint-disable import/no-anonymous-default-export */
import "./Nav.css";
import React from "react";
import fabricio from '../imgs/Fabricio.jpeg'

export default () => (
  <header className="menu-area">
    <div>
      <div className="img-photo">
        <img
          src={fabricio}
          alt="Foto"
        />
        <h1>Fabricio Sinzato</h1>
      </div>
      <div className="bio-text">
        <p style={{color: "gray"}}>
          Aluno de ciências da computação na universidade Unesp, Desenvolvedor
          WEB - Front end
        </p>
      </div>
      <div style={{color: "lightgray!important", textDecoration: "underline", flexDirection: 'column'}} className='d-flex '>
        <a href="https://www.instagram.com/fab.sinz/">
          <i className="fa fa-instagram"></i> Instagram
        </a>
        <text>
          <i className="fa fa-envelope"></i> f.sinzato@unesp.br
        </text>
        <text>
          <i className="fa fa-envelope"></i> fabricio4sinzato@gmail.com
        </text>
      </div>
    </div>
  </header>
);
