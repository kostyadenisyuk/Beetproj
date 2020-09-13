import React from 'react';

//Styles

import './styles.scss';

// -----

export const PhonesSection = props => {
  const { list } = props;
  return (
    <div className="phones-section" id="tour">
      <div className="phones-section__wrapper">
        <h2>Beautiful Interface</h2>
        <p className="line"></p>
        <p>Landing screen</p>
      </div>

      <div className="phones-section__img-wrapper">
        {list.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.name} alt={item.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
