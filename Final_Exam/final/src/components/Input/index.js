import React from 'react';

//Modules

import types from 'prop-types';

//Styles

import './styles.scss';

// -----

export const Input = props => {
  const { value } = props;
  return (
    <div className="input">
      <label htmlFor="fname"></label>
      <div className="input__wrapper">
        <input
          type="email"
          id="fname"
          name="fname"
          className="input__field"
          placeholder="Your e-mail"
          maxLength="35"
        />
        <input type="submit" value={value} className="input__btn" />
      </div>
    </div>
  );
};

// Type of props

Input.propTypes = {
  value: types.string,
};
