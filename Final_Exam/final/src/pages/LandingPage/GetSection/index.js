import React from 'react';

//Modules

import apple from '../../../assets/images/apple.png';

//Components

import { Input } from '../../../components/Input';

//Styles

import './styles.scss';

// -----

export const GetSection = () => {
  return (
    <div className="get-section" id="get%20app">
      <p>Newprovidence</p>
      <h2>Get it to your smartphone </h2>
      <Input value={'Send invite'} />
      <p>Or download from</p>

      <a className="get-section__wrapper-img" href="#">
        <img src={apple} alt="apple_logo" />
      </a>
    </div>
  );
};
