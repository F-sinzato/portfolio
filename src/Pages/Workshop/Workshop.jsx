import React, { Component } from "react";
import ReactModal from "react-modal";
import Footer from "../../layout/Footer";
import Main from "../../layout/Main";
import Nav from "../../layout/Nav";
import db from "../../repo/db.json";

const initialState = {
  showModal: false,
  data: {
    title: "",
    local: "",
    description: "",
  },
};

export default class Workshop extends Component {
  state = { ...initialState };

  constructor() {
    super();
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleAddNewData = this.handleAddNewData.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleAddNewData() {
    db.workshops.push({
      title: this.state.data.title,
      local: this.state.data.local,
      description: this.state.data.description,
    });
  }

  updateField(event) {
    const input = { ...this.state.data };
    input[event.target.name] = event.target.value;
    this.setState({ data: input });
  }

  renderModal() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div>
          <label>Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.data.title}
            onChange={(e) => this.updateField(e)}
          />
        </div>
        <div>
          <label>Local</label>
          <input
            type="text"
            id="local"
            name="local"
            value={this.state.data.local}
            onChange={(e) => this.updateField(e)}
          />
        </div>
        <div>
          <label>Descrição</label>
          <input
            type="text"
            id="description"
            name="description"
            value={this.state.data.description}
            onChange={(e) => this.updateField(e)}
          />
        </div>
        <button className="btn" onClick={this.handleAddNewData}>
          add
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <Main
          icon=""
          title=""
          subtitle=""
        >
          <div className="display-4">Workshops</div>
          <button onClick={this.handleOpenModal}>Adicionar</button>
          <ReactModal isOpen={this.state.showModal} contentLabel="teste">
            <button onClick={this.handleCloseModal}>Fechar</button>
            {this.renderModal()}
          </ReactModal>
          <hr />
          <ul>
            {db.workshops.map((data, i) => (
              <li key={i}>
                <p className="mb-0 lead">{data.title}</p>
                <h5>{data.local}</h5>
                <p style={{ color: "grey" }}>{data.description}</p>
              </li>
            ))}
          </ul>
        </Main>
        <Footer />
      </div>
    );
  }
}
