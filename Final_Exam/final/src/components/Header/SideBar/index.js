import React from 'react';

//Modules

import classNames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const SideBar = props => {
  const { isOpen, list } = props;

  const sidebarClass = classNames({
    'landing-sidebar': true,
    'landing-sidebar--open': isOpen,
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
  isOpen: types.bool,
  list: types.array,
};
