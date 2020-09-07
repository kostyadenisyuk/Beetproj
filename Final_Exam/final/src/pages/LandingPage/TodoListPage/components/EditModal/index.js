import React, { useState } from "react";

// Modules

import types from "prop-types";

// Components

import { Modal1 } from "../../../../../components/Modal1";

// Styles

import "./styles.scss";

// ----------------

export const EditModal = (props) => {
  const { open, onClose, title } = props;

  return (
    <Modal1 open={open} onClose={onClose} title={title} width="xs">
      <div className="todo-list__input-block">
        <input placeholder="Edit todo name" name="todo-input" />

        <div style={{ display: "flex" }}>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </Modal1>
  );
};

// Type of props

EditModal.propTypes = {
  onClose: types.func,
  title: types.string,
  open: types.bool,
};
