import React from 'react';

//Modules

import { Input } from '../../../components/Input';

//Styles

import './styles.scss';

// ----

export const SubscribeSection = () => {
  return (
    <div className="subscribe-section">
      <h2>Subscribe our newsletters</h2>
      <Input value={'Subscribe'} />
      <p>We promise to never spam you.</p>
    </div>
  );
};
