import React from 'react';

export const LeftBar = props => {
  const { list } = props;
  return (
    <div className="leftbar">
      {list.map((item, index) => {
        return (
          <a href={`#${item.to}`} key={index}>
            {item.name}
          </a>
        );
      })}
    </div>
  );
};
