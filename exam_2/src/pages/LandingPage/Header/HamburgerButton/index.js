import React from "react";

// Modules

import classNames from "classnames";
import types from "prop-types";

// Styles

import "./styles.scss";

// ----------------

export const HamburgerButton = (props) => {
  const { handleClick, isOpen, mirror } = props;

  const modifyButton = classNames({
    "hamburger-btn": true,
    "hamburger-btn--mirror-open": mirror && isOpen,
    "hamburger-btn--mirror": mirror,
    "hamburger-btn--open": isOpen,
  });

  return (
    <button className={modifyButton} onClick={handleClick}>
      <p />
      <p />
      <p />
    </button>
  );
};

// Type of props

HamburgerButton.propTypes = {
  handleClick: types.func,
  isOpen: types.bool.isRequired,
  mirror: types.bool,
};

// Default value for props

HamburgerButton.defaultProps = {
  isOpen: false,
  mirror: false,
};
