import React from 'react';

//Modules

import phone from '../../../assets/images/hack-iphone.png';

//Components

import { Buttons } from '../../../components/Buttons';

//Styles

import './styles.scss';

// ----

export const HackSection = () => {
  return (
    <div className="hack-section" id="help">
      <div className="hack-section__phone-wrapper">
        <img src={phone} />
      </div>

      <div className="hack-section__wrapper">
        <h2 className="hack-section__title">Your day is protected</h2>
        <p>There have not been any since we have lived here, said my mother </p>
        <p>
          We thought - Mr. Copperfield thought - it was quite a large rookery;
          but the nests were very old ones, and the birds have deserted them a
          long while.
        </p>

        <div className="hack-section__btn-wrapper">
          <Buttons name="Try to hack us" style="btn--blue" size="btn--lg" />
          <Buttons name="Learn more" style="btn--white" size="btn--md" />
        </div>
      </div>
    </div>
  );
};
