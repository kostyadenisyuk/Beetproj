import React from "react";

export const RightBar = (props) => {
  const { list } = props;
  return (
    <div className="rightbar">
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
