import React from 'react';

//Modules

import types from 'prop-types';

//Components

import { Buttons } from '../../Buttons';

//Styles

import './styles.scss';

//------------

const styles = ['wrapper_blue', 'wrapper_def'];

export const TabsContent = props => {
  const { style, name, price, btn_name } = props;

  const checkButtonStyle = styles.includes(style) ? style : styles[0];

  return (
    <div className="tabs_content ">
      <div className="tabs_content__wrapper ">
        <h2 className="tabs_content__title">Starter</h2>
        <p className="tabs_content__subtitle">FREE</p>
        <p className="tabs_content__info">Build your schedule every day</p>
        <p className="tabs_content__info">Unlimeted events</p>
        <Buttons name="Get Started" size="btn--lg" />
      </div>

      <div className={`tabs_content__wrapper-gr ${checkButtonStyle}`}>
        <h2 className="tabs_content__title">{name}</h2>
        <p className="tabs_content__subtitle">{price}</p>
        <p className="tabs_content__info">Make your life better</p>
        <p className="tabs_content__info"> Personal assistant</p>
        <Buttons
          name={`Make me a ${btn_name}`}
          style="btn--outline"
          size="btn--lg"
        />
      </div>
    </div>
  );
};

// Type of props

TabsContent.propTypes = {
  name: types.string,
};
