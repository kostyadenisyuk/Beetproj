import React from "react";

//Modules

import apple from "../../../assets/images/apple.png";

//Components

import { Input } from "../../../components/Input";

//Styles

import "./styles.scss";

// -----

export const GetSection = () => {
  return (
    <div className="get-section">
      <p>NEWPROVIDENCE</p>
      <h2>Get it to your smartphone </h2>
      <Input value={"Send invite"} />
      <p>OR DOWNLOAD FROM</p>
      <a className="get-section__wrapper-img">
        <img src={apple} />
      </a>
    </div>
  );
};
