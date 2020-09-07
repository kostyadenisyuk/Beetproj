import React, { Component } from "react";
// import ReactDOM from "react-dom" ;
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import Modal from "./components/Modal";

export default class App extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState((state) => ({ isModalOpen: !state.isModalOpen }));
  };

  render() {
    return (
      <div className="App">
        <LandingPage />

        {/* <main>
          <button onClick={this.toggleModal}>Open</button>
          {this.state.isModalOpen && (
            <Modal onClose={this.toggleModal}>
              <h1>Modal!</h1>
            </Modal>
          )}
        </main> */}
      </div>
    );
  }
}
