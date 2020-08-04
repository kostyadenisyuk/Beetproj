import React from "react";

import classNames from "classnames";
import types from "prop-types";

// Components

// Styles

import "./styles.scss";

// ----------------

export const SideBar = (props) => {
  const { isOpen, list } = props;

  const sidebarClass = classNames({
    "landing-sidebar": true,
    "landing-sidebar--open": isOpen,
  });

  return (
    <aside className={sidebarClass}>
      <div className="landing-sidebar__list">
        {list.map((item, index) => {
          return (
            <div key={index} className="landing-sidebar__list-item">
              <a href={`#${item.to}`} key={index}>
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

// Type of props

SideBar.propTypes = {
  isOpen: types.bool.isRequired,
  list: types.array.isRequired,
};

// Default value for props

SideBar.defaultProps = {
  isOpen: false,
};
