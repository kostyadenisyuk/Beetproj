import React from "react";

// Modules

import "./styles.scss";

// Components

import { Tabs } from "../../components/Tabs";
import { TabsContent } from "./TabsContent";

// ----------------

export const TabsField = () => {
  const tabsLinks = [
    {
      name: "tabOne",
      title: "Individual ",
    },
    {
      name: "tabTwo",
      title: "Company",
    },
  ];

  const tabsContent = [
    {
      name: "tabOne",

      content: () => <TabsContent name={"NELoj"} />,
    },
    {
      name: "tabTwo",
      content: () => <TabsContent name={"Loj"} />,
    },
  ];

  return (
    <Tabs
      linkFullWidth
      defaultTab={tabsLinks[1].name}
      content={tabsContent}
      links={tabsLinks}
    />
  );
};
