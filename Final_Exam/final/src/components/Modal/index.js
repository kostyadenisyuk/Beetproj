import React, { Component } from "react";
import ReactDOM from "react-dom";

import classNames from "classnames";

import "./styles.scss";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    const modalClass = classNames({
      modal: true,
      "modal--open": props.open,
    });
  }

  open() {
    document.body.setAttribute("class", "overflow-hidden");
  }

  close() {
    document.body.setAttribute("class", "overflow-no");
  }

  render(open) {
    const modalClass = classNames({
      modal: true,
      "modal--open": open,
    });

    return ReactDOM.createPortal(
      <div className={`${modalClass}`}>
        <div className="modal__content">
          <button className="modal__close-btn" onClick={this.props.onClose}>
            Close
          </button>

          {this.props.children}
        </div>
        <div className="modal__backdrop" onClick={this.props.onClose} />
      </div>,
      document.getElementById("portal")
    );
  }
}
