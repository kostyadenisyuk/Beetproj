import React from "react";

//Modules

import types from "prop-types";

//Components

import { Buttons } from "../../Buttons";

//Styles

import "./styles.scss";

//------------

export const TabsContent = (props) => {
  const { name } = props;
  return (
    <div className="tabs_content animatedFadeInUp fadeInUp">
      <div className="tabs_content__wrapper">
        <h2 className="tabs_content__title">Starter</h2>

        <p className="tabs_content__subtitle">FREE</p>

        <p>{name}</p>
        <p className="tabs_content__info">Build your schedule every day</p>
        <p className="tabs_content__info">Unlimeted events</p>
        <Buttons name="Get Started" size="btn--lg" />
      </div>

      <div className="tabs_content__wrapper-gr">
        <h2 className="tabs_content__title">Pro</h2>

        <p className="tabs_content__subtitle">$4.99</p>

        <p>{name}</p>
        <p className="tabs_content__info">Make your life better</p>
        <p className="tabs_content__info"> Personal assistant</p>
        <Buttons name="Make me a pro" style="btn--outline" size="btn--lg" />
      </div>
    </div>
  );
};

// Type of props

TabsContent.propTypes = {
  name: types.string,
};
