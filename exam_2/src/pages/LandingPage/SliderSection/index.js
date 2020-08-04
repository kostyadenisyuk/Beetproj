import React from "react";

import "./styles.scss";

import { SimpleSlider } from "../../../components/SimpleSlider";

export const SliderSection = () => {
  return (
    <div className="slider_section">
      <h2>Our friends who are looking for a house</h2>
      <SimpleSlider className="slider_section__slider" />
      <button className="slider_section__btn">Get to know the rest</button>
    </div>
  );
};
