import React, { useState } from 'react';

//Modules

import classNames from 'classnames';
import types from 'prop-types';
import { useCurrentPosition } from '../../hooks/useCurrentPosition';

//Components

import { LeftBar } from './LeftBar';
import { RightBar } from './RightBar';
import { SideBarList, LeftBarList, RightBarList } from '../../constants/navBar';
import logo from '../../assets/images/logo.png';
import { HamburgerButton } from './HamburgerButton';
import { SideBar } from './SideBar';

//Styles

import './styles.scss';

// ------

export const Header = props => {
  const { visiblePosition, className } = props;
  const [isSidebarShow, toggleSidebarShow] = useState(false);

  function toggleHandler() {
    toggleSidebarShow(!isSidebarShow);
  }

  const currentPosition = useCurrentPosition();

  const HeaderClass = classNames(
    'header',
    {
      'header--active': currentPosition >= visiblePosition,
    },
    className
  );

  return (
    <nav className={HeaderClass}>
      <div className="header__wrapper">
        <HamburgerButton handleClick={toggleHandler} isOpen={isSidebarShow} />
        <SideBar isOpen={isSidebarShow} list={SideBarList} />
        <LeftBar list={LeftBarList} />
      </div>
      <div className="header__wrapper-img">
        <img src={logo} alt="logo" />
      </div>
      <RightBar list={RightBarList} />
    </nav>
  );
};

// Default type of props

Header.defaultProps = {
  visiblePosition: 50,
  className: '',
};

// Type of props

Header.propTypes = {
  visiblePosition: types.number,
  className: types.string,
};
