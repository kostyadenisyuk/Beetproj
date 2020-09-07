import React from "react";

//Modules

import phone1 from "../../../assets/images/phone-1.png";
import phone2 from "../../../assets/images/phone-2.png";
import phone3 from "../../../assets/images/phone-3.png";
import phone4 from "../../../assets/images/phone-4.png";
import mainphone from "../../../assets/images/general-phone.png";

//Styles
import "./styles.scss";

// -----

export const PhonesSection = () => {
  return (
    <div className="phones-section">
      <div className="phones-section__wrapper">
        <h2>Beautiful Interface</h2>
        <p className="line"></p>
        <p>LANDING SCREEN</p>
      </div>

      <div className="phones-section__img-wrapper">
        <div>
          <img src={phone1} alt="" />
        </div>

        <div>
          <img src={phone2} alt="" />
        </div>

        <div>
          <img src={mainphone} alt="" />
        </div>

        <div>
          <img src={phone3} alt="" />
        </div>

        <div>
          <img src={phone4} alt="" />
        </div>
      </div>
    </div>
  );
};
