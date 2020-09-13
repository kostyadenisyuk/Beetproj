import React from 'react';

//Components

import HomeSection from './HomeSection';
import { InfoSection } from './InfoSection';
import { HackSection } from './HackSection';
import { PartnersSection } from './PartnersSection';
import { PhonesSection } from './PhonesSection';
import { GetSection } from './GetSection';
import { SliderSection } from './SliderSection';
import { SubscribeSection } from './SubscribeSection';
import { Footer } from './Footer';
import { ChooseSection } from './ChooseSection';
import { ButtonUp } from '../../components/ButtonUp';
import { Header } from '../../components/Header';
import { PhonesImages } from '../../constants/images';
import { IconsList } from '../../constants/icons';

//Styles

import './styles.scss';

// ----

export const LandingPage = () => {
  return (
    <div className="landing">
      <Header style={`$display:flex;`} />
      <HomeSection />
      <InfoSection />
      <HackSection />
      <PartnersSection />
      <PhonesSection list={PhonesImages} />
      <GetSection />
      <SliderSection />
      <ChooseSection />
      <SubscribeSection />
      <Footer list={IconsList} />
      <ButtonUp className="landing__button-up" />
    </div>
  );
};
