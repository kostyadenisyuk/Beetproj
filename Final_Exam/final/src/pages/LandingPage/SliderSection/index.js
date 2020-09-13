import React from 'react';

//Modules

import Slider from 'react-slick';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import slider_photo_001 from '../../../assets/images/slider_photo_001.jpg';
import slider_photo_002 from '../../../assets/images/slider_photo_002.jpg';
import slider_photo_003 from '../../../assets/images/slider_photo_003.jpg';

//Components

import { SliderCard } from './SliderCard';

//Styles

import './styles.scss';

// ------

export class SliderSection extends React.Component {
  render() {
    const SlickButtonFix = ({
      currentSlide,
      slideCount,
      children,
      ...props
    }) => <span {...props}>{children}</span>;
    const settings = {
      infinity: true,
      speed: 500,
      slidesToShow: 3,
      slidedToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: (
        <SlickButtonFix>
          <BsArrowRight />
        </SlickButtonFix>
      ),
      prevArrow: (
        <SlickButtonFix>
          <BsArrowLeft />
        </SlickButtonFix>
      ),

      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Slider className="slider" {...settings}>
        <div className="slider__slide">
          <SliderCard slider_photo={slider_photo_003} />
        </div>

        <div className="slider__slide">
          <SliderCard slider_photo={slider_photo_001} />
        </div>

        <div className="slider__slide">
          <SliderCard slider_photo={slider_photo_002} />
        </div>

        <div className="slider__slide">
          <SliderCard slider_photo={slider_photo_001} />
        </div>

        <div className="slider__slide">
          <SliderCard slider_photo={slider_photo_003} />
        </div>

        <div className="slider__slide">
          <SliderCard slider_photo={slider_photo_002} />
        </div>
      </Slider>
    );
  }
}
