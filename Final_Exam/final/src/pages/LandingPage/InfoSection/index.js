import React from 'react';

//Modules

import { VscLock } from 'react-icons/vsc';
import { BsAlarm } from 'react-icons/bs';

//Components

import { ReactIcon } from '../../../components/ReactIcon';

//Styles

import './styles.scss';

// ----

export const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-section__wrapper">
        <ReactIcon size="xxxxl">
          <VscLock />
        </ReactIcon>
        <h4 className="info-section__title">Real-time all the time</h4>

        <p>
          Thus much I thought proper to tell you in relation to yourself, and to
          the trust I reposed in you.
        </p>
        <p>
          Just then her head struck against the roof of the hall: in fact she
          was now more than nine feet high, and she at once took up the little
          golden key and hurried off to the garden door.
        </p>
      </div>

      <div className="info-section__wrapper">
        <ReactIcon size="xxxxl">
          <BsAlarm />
        </ReactIcon>
        <h4 className="info-section__title">Adopt without any obstacles</h4>
        <p>
          This sounded a very good reason, and Alice was quite pleased to know
          it. 'I never thought of that before!' she said.
        </p>
        <p>
          This I have produced as a scantling of Jack’s great eloquence and the
          force of his reasoning upon such abstruse matters.
        </p>
      </div>
    </div>
  );
};
