import React from 'react';

//Components

import { TabsField } from '../../../components/TabsField';

//Styles

import './styles.scss';

// ------

export const ChooseSection = () => {
  return (
    <div className="choose-section" id="pricing">
      <div className="choose-section__wrapper">
        <h2>Choose your perfect plan</h2>
        <p className="choose-section__subtitle">YOU ARE</p>
        <div className="choose-section__snt">
          <TabsField />
        </div>

        <p className="choose-section__info">
          Thus much I thought proper to tell you in relation to yourself, and to
          the trust I reposed in you.
        </p>

        <div className="choose-section__info-wrapper">
          <p>Have a bigger team?</p>
          <a> Let‘s talk</a>
        </div>
      </div>
    </div>
  );
};
