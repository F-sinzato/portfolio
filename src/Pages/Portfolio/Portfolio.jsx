import React from "react";
import { Component } from "react";
import ReactModal from "react-modal";
import Footer from "../../layout/Footer";
import Main from "../../layout/Main";
import Nav from "../../layout/Nav";
import db from "../../repo/db.json";

const initialState = {
  showModal: false,
  showModalCou: false,
  data: {
    exp: {
      title: "",
      local: "",
      date: "",
      description: "",
    },
    course: {
      title: "",
      date: "",
      description: "",
    },
  },
};

export default class Portfolio extends Component {
  state = { ...initialState };

  constructor() {
    super();
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModalCou = this.handleOpenModalCou.bind(this);
    this.handleCloseModalCou = this.handleCloseModalCou.bind(this);
    this.handleAddNewDataExp = this.handleAddNewDataExp.bind(this);
    this.handleAddNewDataCou = this.handleAddNewDataCou.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }
  handleOpenModalCou() {
    this.setState({ showModalCou: true });
  }
  handleCloseModalCou() {
    this.setState({ showModalCou: false });
  }

  handleAddNewDataExp() {
    db.experience.push({
      title: this.state.data.exp.title,
      local: this.state.data.exp.local,
      date: this.state.data.exp.date,
      description: this.state.data.exp.description,
    });
  }
  handleAddNewDataCou() {
    db.courses.push({
      title: this.state.data.course.title,
      date: this.state.data.course.date,
      description: this.state.data.course.description,
    });
  }

  updateField(event) {
    const input = { ...this.state.data.exp };
    const courses = { ...this.state.data.course };
    input[event.target.name] = event.target.value;
    this.setState({ data: { exp: input, course: courses}});
  }
  updateFieldCou(event) {
    const input = { ...this.state.data.course };
    const exp = { ...this.state.data.exp };
    input[event.target.name] = event.target.value;
    this.setState({ data: {exp: exp, course: input} });
  }

  renderModalExp() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div>
          <label>Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.data.exp.title}
            onChange={(e) => this.updateField(e)}
          />
        </div>
        <div>
          <label>Local</label>
          <input
            type="text"
            id="local"
            name="local"
            value={this.state.data.exp.local}
            onChange={(e) => this.updateField(e)}
          />
        </div>
        <div>
          <label>Data(xxxx-xxxx)</label>
          <input
            type="text"
            id="date"
            name="date"
            value={this.state.data.exp.date}
            onChange={(e) => this.updateField(e)}
          />
        </div>
        <div>
          <label>Descrição</label>
          <input
            type="text"
            id="description"
            name="description"
            value={this.state.data.exp.description}
            onChange={(e) => this.updateField(e)}
          />
        </div>
        <button className="btn" onClick={this.handleAddNewDataExp}>
          add
        </button>
      </div>
    );
  }
  renderModalCou() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div>
          <label>Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.data.course.title}
            onChange={(e) => this.updateFieldCou(e)}
          />
        </div>
        <div>
          <label>Local</label>
          <input
            type="text"
            id="local"
            name="local"
            value={this.state.data.course.local}
            onChange={(e) => this.updateFieldCou(e)}
          />
        </div>
        <div>
          <label>Data (xxxx-xxxx)</label>
          <input
            type="text"
            id="date"
            name="date"
            value={this.state.data.course.date}
            onChange={(e) => this.updateFieldCou(e)}
          />
        </div>
        <button className="btn" onClick={this.handleAddNewDataCou}>
          add
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <Main icon="" title="" subtitle="">
          <div className="display-4">Portifolio</div>
          <hr />
          <div className="d-flex flex-row">
            <h4> Cursos :</h4>
            <button onClick={this.handleOpenModalCou}>Adicionar</button>
            <ReactModal isOpen={this.state.showModalCou} contentLabel="teste">
              <button onClick={this.handleCloseModalCou}>Fechar</button>
              {this.renderModalCou()}
            </ReactModal>
          </div>
          <ul>
            {db.courses.map((data, i) => (
              <li key={i}>
                <p className="mb-0 lead">{data.title}</p>
                <h5>{data.local}</h5>
                <p style={{ color: "grey" }}>{data.date}</p>
              </li>
            ))}
          </ul>
          <hr />
          <div className="d-flex flex-row">
            <h4> Experiência :</h4>
            <button onClick={this.handleOpenModal}>Adicionar</button>
            <ReactModal isOpen={this.state.showModal} contentLabel="teste">
              <button onClick={this.handleCloseModal}>Fechar</button>
              {this.renderModalExp()}
            </ReactModal>
          </div>
          <ul>
            {db.experience.map((data, i) => (
              <li key={i}>
                <p className="mb-0 lead">{data.title}</p>
                <h5>{data.local}</h5>
                <p style={{ color: "grey" }}>{data.date}</p>
                <p style={{ color: "lightgrey" }}>{data.description}</p>
              </li>
            ))}
          </ul>
        </Main>
        <Footer />
      </div>
    );
  }
}
