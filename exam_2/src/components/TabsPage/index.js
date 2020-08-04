import React from "react";

// Modules

import "./styles.scss";

import {
  GiDogBowl,
  GiToyMallet,
  GiMedicinePills,
  GiSniffingDog,
} from "react-icons/gi";
import { FaCarAlt, FaCat, FaPills, FaBed } from "react-icons/fa";
import { MdPets } from "react-icons/md";

// Components

import { Tabs } from "../../components/Tabs";
import { TabsContent } from "./TabsContent";
import dog from "../../assets/images/tabs_content.svg";
import dog1 from "../../assets/images/sliderphoto_1.svg";
import dog2 from "../../assets/images/sliderphoto_2.svg";

// ----------------

export const TabsPage = () => {
  const tabsLinks = [
    {
      name: "tabOne",
      title: "Food ",
      icon: () => <GiDogBowl className="tabs__icon" />,
    },
    {
      name: "tabTwo",
      title: "Transportation",
      icon: () => <FaCarAlt className="tabs__icon" />,
    },
    {
      name: "tabThree",
      title: "Toys",
      icon: () => <GiToyMallet className="tabs__icon" />,
    },
    {
      name: "tabFour",
      title: "Bowls and cup ",
      icon: () => <MdPets className="tabs__icon" />,
    },
    {
      name: "tabFive",
      title: "Shampoos",
      icon: () => <FaCat className="tabs__icon" />,
    },
    {
      name: "tabSix",
      title: "Vitamins",
      icon: () => <GiMedicinePills className="tabs__icon" />,
    },
    {
      name: "tabSeven",
      title: "Medicines ",
      icon: () => <FaPills className="tabs__icon" />,
    },
    {
      name: "tabEight",
      title: "Colars / leashes",
      icon: () => <GiSniffingDog className="tabs__icon" />,
    },
    {
      name: "tabNine",
      title: "Sleeping area",
      icon: () => <FaBed className="tabs__icon" />,
    },
  ];

  const tabsContent = [
    {
      name: "tabOne",

      content: () => <TabsContent name={"Genri"} content={dog} />,
    },
    {
      name: "tabTwo",
      content: () => <TabsContent name={"Ralf"} content={dog1} />,
    },
    {
      name: "tabThree",
      content: () => <TabsContent name={"Polo"} content={dog2} />,
    },
    {
      name: "tabFour",

      content: () => <TabsContent name={"Marsik"} content={dog1} />,
    },
    {
      name: "tabFive",
      content: () => <TabsContent name={"Shelma"} content={dog2} />,
    },
    {
      name: "tabSix",
      content: () => <TabsContent name={"Lui"} content={dog1} />,
    },
    {
      name: "tabSeven",

      content: () => <TabsContent name={"Gimme"} content={dog1} />,
    },
    {
      name: "tabEight",
      content: () => <TabsContent name={"Geo"} content={dog} />,
    },
    {
      name: "tabNine",
      content: () => <TabsContent name={"Gerald"} content={dog2} />,
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
