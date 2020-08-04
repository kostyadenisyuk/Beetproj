import React from "react";

import "./styles.scss";

export const Navbar = (props) => {
  const { list } = props;
  return (
    <nav className="navbar">
      {list.map((item, index) => {
        return (
          <a key={index} href={`#${item.to}`} className="navbar__item">
            {item.name}
          </a>
        );
      })}
    </nav>
  );
};
