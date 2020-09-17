import React from 'react';

//Modules

import types from 'prop-types';

//Styles

import './styles.scss';

// ------

export const SliderCard = props => {
  const { slider_photo } = props;
  return (
    <div className="slider-card">
      <img src={slider_photo} alt="slider_photo" />
      <h4>New Providence is the great UI kit </h4>
      <p>
        “Just then her head struck against the roof of the hall: in fact she was
        now more than nine feet high, and she at once took up the little golden
        key and hurried off to the garden door.”
      </p>

      <p className="slider-card__cards-name">Cameron dowman</p>
    </div>
  );
};

// Type of props

SliderCard.propTypes = {
  slider_photo: types.string,
};
