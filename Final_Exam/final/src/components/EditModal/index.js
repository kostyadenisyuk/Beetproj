import React from 'react';
import ReactPlayer from 'react-player';

// Modules

import types from 'prop-types';

// Components

import { Modal } from '../Modal';

// Components

import { Buttons } from '../Buttons';

// Styles

import './styles.scss';

// ----------------

export const EditModal = props => {
  const { open, onClose, title } = props;

  return (
    <Modal open={open} onClose={onClose} title={title} width="md">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=v_m7gqsISlE"
          width="100%"
          height="100%"
        />
        <div className="close-btn" onClick={onClose}>
          <Buttons name="Cancel" style="btn--blue" size="btn--lg" />
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
