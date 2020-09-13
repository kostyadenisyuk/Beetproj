import React from 'react';

// Modules

import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const ModalHeader = props => {
  const { onClose, title } = props;

  return onClose || title ? (
    <div className="modal-header">
      {title && <p className="modal-header__title">{title}</p>}
      {onClose && <p>Wait</p>}
    </div>
  ) : null;
};

// Type of props

ModalHeader.propTypes = {
  title: types.string,
  onClose: types.func,
};
