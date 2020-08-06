import React from "react";

import types from "prop-types";

import "./styles.scss";

export const SliderCards = (props) => {
  const { player, name } = props;
  return (
    <div className="slidercard">
      <img src={player} />
      <p>{name}</p>
      <button className="slidercard__btn">Learn more</button>
    </div>
  );
};

SliderCards.propTypes = {
  player: types.oneOf(["dog", "dog1", "dog2"]),
  name: types.string.isRequired,
};
