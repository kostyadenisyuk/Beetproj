import React from 'react';

//Modules

import types from 'prop-types';

//Styles

import './styles.scss';

// -----

const styles = ['btn--blue', 'btn--white', 'btn--outline', 'btn--green'];

const sizes = ['btn--md', 'btn--sm', 'btn--lg'];

export const Buttons = props => {
  const { style, size, name } = props;

  const checkButtonStyle = styles.includes(style) ? style : styles[0];

  const checkButtonSize = sizes.includes(size) ? size : sizes[0];

  return (
    <>
      <button className={`btn ${checkButtonStyle}  ${checkButtonSize}`}>
        {name}
      </button>
    </>
  );
};

// Type of props

Buttons.propTypes = {
  style: types.string,
  size: types.string,
  name: types.string,
};
