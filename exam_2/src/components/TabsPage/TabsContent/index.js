import React from "react";

import { FaRegCreditCard } from "react-icons/fa";

import "./styles.scss";

export const TabsContent = (props) => {
  const { name, content } = props;
  return (
    <div className="tabs_content">
      <div className="tabs_content__wrapper tabs_content__wrapper--img">
        <img src={content} className="tabs_content__img" />
        <h3>{name}</h3>
      </div>

      <div className="tabs_content__wrapper">
        <h2 className="tabs_content__title">
          In addition, you can make a donation
        </h2>
        <p className="tabs_content__subtitle">
          Name of the bank / Type of bank account
        </p>
        <p className="tabs_content__card">
          <FaRegCreditCard className="tabs_content__card tabs_content__card--icon" />
          8380 2880 8028 8791 7435
        </p>
        <p className="tabs_content__info">
          Legal information and lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac
          diam. Praesent ultrices maximus tortor et vulputate. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </div>
  );
};
