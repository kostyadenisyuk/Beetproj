import React, { useState } from "react";

import { Navbar } from "../../../components/Navbar";
import { HamburgerButton } from "./HamburgerButton";
import { Logo } from "./Logo";
import { SideBar } from "./Sidebar";

import { navbarList, sideBarList } from "../../../constants/LandingPage";

import "./styles.scss";

export const Header = () => {
  const [isSidebarShow, toggleSidebarShow] = useState(false);

  function toggleHandler() {
    toggleSidebarShow(!isSidebarShow);
  }
  return (
    <>
      <header className="header">
        <Logo />
        <div className="header__nav-wrapper">
          <Navbar list={navbarList} />
          <HamburgerButton handleClick={toggleHandler} isOpen={isSidebarShow} />
        </div>
      </header>

      <SideBar isOpen={isSidebarShow} list={sideBarList} />
    </>
  );
};
