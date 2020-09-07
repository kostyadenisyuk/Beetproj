import React from "react";

//Modules

import dropbox from "../../../assets/images/dropbox.png";
import evernote from "../../../assets/images/evernote.png";
import map from "../../../assets/images/map.png";

//Styles

import "./styles.scss";

// -----

export const PartnersSection = () => {
  return (
    <div className="partners-section">
      <div className="partners-section__wrapper">
        <h2>We are almost everywhere</h2>

        <p>
          Now the races of these two have been for some ages utterly extinct,
          and besides to discourse any further of them would not be at all to my
          purpose.
        </p>
        <p>
          Thus much I thought proper to tell you in relation to yourself, and to
          the trust I reposed in you.
        </p>

        <p className="partners-section__wrapper partners-section__wrapper--info">
          PARTNERS
        </p>

        <div className="img-wrapper">
          <div>
            <img src={dropbox} />
          </div>
          <div>
            <img src={evernote} />
          </div>
        </div>
      </div>
      <div className="partners-section__img-wrapper">
        <img src={map} />
      </div>
    </div>
  );
};
