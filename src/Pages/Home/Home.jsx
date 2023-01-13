import React from "react";
import Footer from "../../layout/Footer";
import Main from "../../layout/Main";
import Nav from "../../layout/Nav";

export default (props) => (
  <div className="app">
    <Nav />
    <Main
      icon=""
      title=""
      subtitle=""
    >
      <div className="display-4">Fabricio da Silveira Sinzato</div>
      <hr />
      <p className="mb-0">
        Site desenvolvido para o projeto de desenvolvimento WEB, do curso de
        ciências da computação, da universidade Unesp.
      </p>

      <hr />
      <p className="mb-0">
        Desenvolvido utilizando REACT JS.
      </p>
    </Main>
    <Footer />
  </div>
);
