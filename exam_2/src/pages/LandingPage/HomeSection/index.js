import React from "react";

import { Header } from "../Header";
import home from "../../../assets/images/home_bigimg.svg";

import "./styles.scss";

export const HomeSection = () => {
  return (
    <div className="home_section">
      <Header />
      <div className="home_content">
        <h1 className="home_content__h1">Not only people need a house </h1>
        <p className="home_content__txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida
          est in porttitor porttitor. Duis sodales elementum ipsum, vehicula
          condimentum erat fringilla et.
        </p>
        <button className="home_content__button">Make a friend</button>
      </div>
      <img src={home} className="home_section__img" />
    </div>
  );
};
