import React from "react";

import { MdMailOutline } from "react-icons/md";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import footer from "../../../assets/images/footer_img.svg";

import "./styles.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__leftcol">
          <h2 className="footer__title">For questions and suggestions</h2>
          <div>
            <p className="footer__subtitle">
              <MdMailOutline className="footer__icon footer__icon--email" />
              email@shelter.com
            </p>
          </div>
          <div>
            <p className="footer__subtitle">
              <FaPhone className="footer__icon" />
              +13 674 567 75 54
            </p>
          </div>
        </div>

        <div className="footer__rightcol">
          <h2 className="footer__title">We are waiting for your visit</h2>
          <div>
            <p className="footer__subtitle">
              <FaMapMarkerAlt className="footer__icon" />
              Boston, Central Street, 1st (Entrance from the store)
            </p>
          </div>
          <div>
            <p className="footer__subtitle">
              <FaMapMarkerAlt className="footer__icon" />
              London, South Park, 18st
            </p>
          </div>
        </div>
      </div>
      <div className="footer__img">
        <img src={footer} />
      </div>
    </div>
  );
};
