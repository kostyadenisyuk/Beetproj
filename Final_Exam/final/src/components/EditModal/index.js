import React from 'react';

// Modules

import types from 'prop-types';

// Components

import { Modal } from '../Modal';

// Styles

import './styles.scss';

// ----------------

export const EditModal = props => {
  const { open, onClose, title } = props;

  return (
    <Modal open={open} onClose={onClose} title={title} width="xs">
      <div className="todo-list__input-block">
        <input placeholder="Edit todo name" name="todo-input" />

        <div style={{ display: 'flex' }}>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

// Type of props

EditModal.propTypes = {
  onClose: types.func,
  title: types.string,
  open: types.bool,
};
