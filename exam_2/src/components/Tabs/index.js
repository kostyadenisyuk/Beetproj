import React, { useState } from "react";

import classNames from "classnames";

import { ReactIcon } from "../../components/ReactIcon";

import "./styles.scss";

export const Tabs = (props) => {
  const { linkFullWidth, defaultTab, content, links } = props;

  const [activeTabName, setActiveTabName] = useState(
    defaultTab || links[0].name
  );

  const handleTabSet = (name) => {
    setActiveTabName(name);
  };

  const tab = content.find((tab) => tab.name === activeTabName);

  const linkClass = (name) =>
    classNames({
      "tabs__header-link": true,
      "tabs__header-link--active": name === activeTabName,
      "tabs__header-link--full-width": linkFullWidth,
    });

  return (
    <div className="tabs">
      <div className="tabs__header-scroll-wrapper">
        <div className="tabs__header">
          {links.map((link) => {
            return (
              <div
                className={linkClass(link.name)}
                onClick={() => handleTabSet(link.name)}
                key={link.name}
              >
                <p>{link.title}</p>
                <ReactIcon size="lg">{link.icon()}</ReactIcon>
              </div>
            );
          })}
        </div>
      </div>

      <div className="tabs__content">{tab.content()}</div>
    </div>
  );
};
