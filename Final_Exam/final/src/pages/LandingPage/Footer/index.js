import React from 'react';

//Modules

import logo from '../../../assets/images/logo.png';
import apple from '../../../assets/images/apple.png';
import logoun from '../../../assets/images/footer-logo.png';

//Components

import { ReactIcon } from '../../../components/ReactIcon';

//Styles

import './styles.scss';

// -----

export const Footer = props => {
  const { list } = props;
  return (
    <footer className="footer" id="contacts">
      <div className="footer__wrapper">
        <div className="footer__left-column">
          <div>
            <img src={logo} />
          </div>

          <p>
            It was some time before he obtained any answer, and the reply, when
            made, was unpropitious.
          </p>

          <div className="left-column__wrapper">
            <img src={apple} />
          </div>
          <div className="footer__logo-wrapper">
            {list.map((item, index) => {
              return (
                <ReactIcon key={index} size="xl">
                  <a href={item.href}>{<item.icon />}</a>
                </ReactIcon>
              );
            })}
          </div>
        </div>

        <div className="footer__wrapper-info">
          <div className="footer__info-column">
            <p>Learn more</p>
            <a>How it works?</a>
            <a>Meeting tools</a>
            <a>Live striming</a>
            <a>Contat method</a>
          </div>

          <div className="footer__info-column">
            <p>About us</p>
            <a>About us</a>
            <a>Features</a>
            <a>Privacy police</a>
            <a>Terms & Conditions</a>
          </div>

          <div className="footer__info-column">
            <p>Support</p>
            <a>F.A.Q.</a>
            <a>Contact us</a>
            <a>Live chat</a>
            <a>Phone call</a>
          </div>
        </div>
      </div>

      <div className="footer__base">
        <p className="line"></p>

        <div className="footer__wrapper-bs">
          <div className="footer__logo-wrapper-lt">
            <p>For more freebies visit:</p>
            <a href="#">http://getcraftwork.com</a>
          </div>

          <div className="footer__logo-wrapper-rt">
            <p>Made with love by</p>
            <img src={logoun} />
          </div>
        </div>
      </div>
    </footer>
  );
};
