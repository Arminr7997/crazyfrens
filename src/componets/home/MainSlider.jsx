import React, { Fragment } from "react";
import Slider from "react-slick";
import { Images } from "@/utils/images";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: 32 }}
      onClick={onClick}
    >
      <img src={Images.mainArrowRight} alt="arrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: 32 }}
      onClick={onClick}
    >
      <img src={Images.mainArrowLeft} alt="arrow" />
    </div>
  );
}

function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow className={"next"} />,
    prevArrow: <SamplePrevArrow className={"prev"} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <Slider {...settings} className="w-full lg:max-w-xl main-slider">
        <div className="px-6 d-flex justify-center">
          <img
            className="object-cover h-full lg:w-2/3 rounded-md p-4"
            src={Images.heroSlide1}
            alt="slider"
          />
        </div>
        <div className="px-6 d-flex justify-center">
          <img
            className="object-cover h-full lg:w-2/3 rounded-md p-4"
            src={Images.heroSlide2}
            alt="slider"
          />
        </div>
        <div className="px-6 d-flex justify-center">
          <img
            className="object-cover h-full lg:w-2/3 rounded-md p-4"
            src={Images.heroSlide3}
            alt="slider"
          />
        </div>
      </Slider>
    </Fragment>
  );
}

export default MainSlider;
