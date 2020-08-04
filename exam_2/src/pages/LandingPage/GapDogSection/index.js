import React from "react";

import pets from "../../../assets/images/pats.svg";

import "./styles.scss";

export const GapDogSection = () => {
  return (
    <div className="gapdog_main">
      <img src={pets} className="gapdog_main__img" />

      <div className="gapdog_main__wrapper">
        <h2 className="gapdog_main__title">About the shelter “Cozy House”</h2>
        <p className="gapdog_main__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          efficitur blandit condimentum. Proin accumsan lorem vel gravida
          fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec
          consectetur, diam in porta tempus, urna ligula vestibulum nibh, ac
          ornare felis justo nec leo. Praesent mattis nibh quis ultrices
          pharetra. Morbi tempus at ante sit amet tristique. Maecenas dignissim
          justo orci, in laoreet urna dapibus nec. Praesent quis tortor
          faucibus, tristique ante vitae, dignissim lorem. Sed at ligula et sem
          mattis gravida ac vel erat.
        </p>
      </div>
    </div>
  );
};
