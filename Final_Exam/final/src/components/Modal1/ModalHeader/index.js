import React from "react";

// Modules

// import { IoMdCloseCircle } from "react-icons/io";
import types from "prop-types";

// Components

// import { ReactIcon } from "../../ReactIcon";

// Styles

import "./styles.scss";

// ----------------

export const ModalHeader = (props) => {
  const { onClose, title } = props;

  return onClose || title ? (
    <div className="modal-header">
      {title && <p className="modal-header__title">{title}</p>}

      {onClose && <p>LOH</p>}
    </div>
  ) : null;
};

// Type of props

ModalHeader.propTypes = {
  title: types.string,
  onClose: types.func,
};
