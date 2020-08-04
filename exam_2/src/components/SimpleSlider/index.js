import React from "react";

// Modules

import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// Components

import { SliderCards } from "../../components/SliderCards";
import dog from "../../assets/images/slider_card1.svg";
import dog1 from "../../assets/images/sliderphoto_1.svg";
import dog2 from "../../assets/images/sliderphoto_2.svg";
// Styles

import "./styles.scss";
import { SliderList } from "../../constants/SliderList";

// ----------------

const SampleNextArrow = (props) => {
  const { className, onClick } = props;

  return <div className={className} onClick={onClick}></div>;
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;

  return <div className={className} onClick={onClick}></div>;
};

// ----------------

export class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: <BsArrowRight />,
      prevArrow: <BsArrowLeft />,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 710,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Slider className="home-slider" {...settings}>
        <div className="home-slider__slide">
          <SliderCards list={SliderList} player={dog} name={"Vasya"} />
        </div>
        <div className="home-slider__slide">
          <SliderCards list={SliderList} player={dog2} name={"Kolya"} />
        </div>

        <div className="home-slider__slide">
          <SliderCards list={SliderList} player={dog1} name={"Petya"} />
        </div>

        <div className="home-slider__slide">
          <SliderCards list={SliderList} player={dog2} name={"Vasya"} />
        </div>

        <div className="home-slider__slide">
          <SliderCards list={SliderList} player={dog} name={"Kolya"} />
        </div>
        <div className="home-slider__slide">
          <SliderCards list={SliderList} player={dog1} name={"Petya"} />
        </div>
      </Slider>
    );
  }
}
