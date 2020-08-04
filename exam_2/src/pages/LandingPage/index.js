import React from "react";

import { HomeSection } from "./HomeSection";
import { GapDogSection } from "./GapDogSection";
import { SliderSection } from "./SliderSection";
import { Footer } from "./Footer";
import { Tabs } from "../../components/Tabs";
import { TabsPage } from "../../components/TabsPage";

export const LandingPage = () => {
  return (
    <>
      <HomeSection />
      <GapDogSection />
      <SliderSection />
      <TabsPage />
      <Footer />
    </>
  );
};
