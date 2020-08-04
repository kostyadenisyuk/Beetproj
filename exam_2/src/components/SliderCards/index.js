import React from "react";

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
