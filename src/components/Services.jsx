import React from "react";

import Heading from "./Heading";
import { Accordion } from "react-bootstrap-accordion";
import Slider from "react-slick";
import "react-bootstrap-accordion/dist/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { PiStarFourFill } from "react-icons/pi";

import { servicesSlider, servicesProvided } from "../assets/data";

const Services = () => {
  var settings = {
    dots: false,
    infinite: true,
    swipeToSlide: false,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 5000,
    autoplaySpeed: 10,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section id="services" className="overflow-hidden pt-7">
      <div className="hidden sm:block h-24 w-full bg-gradient-to-r from-indigo-400 via-purple-400 to-orange-400"></div>
      <div className="hidden sm:block -mt-20 h-20 bg-white border shadow-md px-5 -mx-2 -rotate-3">
        <div className="slider-container text-2xl font-bold mt-6">
          <Slider {...settings}>
            {servicesSlider.map((item, index) => {
              return (
                <div
                  key={index}
                  className="!flex items-center justify-center gap-5">
                  <PiStarFourFill />
                  <h3>{item.name}</h3>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="container res-padding flex justify-between flex-col sm:flex-row gap-y-12 sm:gap-y-0 sm:gap-x-8 md:gap-x-14 lg:gap-x-20">
        <div className="space-y-6 w-full">
          <Heading>Services I Am Providing</Heading>
          <p>
            I offer all kinds of web development services you need at
            competitive prices. I ensure top-notch quality with unlimited
            revisions, so you can achieve the best possible website for your
            needs.
          </p>
          <div className="pt-5">
            <Button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500">
              Get in touch
            </Button>
          </div>
        </div>
        <div className="w-full space-y-6">
          {servicesProvided.map((item, index) => {
            return (
              <Accordion key={index} title={item.title}>
                <ul className="list-disc pl-4 space-y-4">
                  {item.lists.map((list, indexList) => {
                    return <li key={indexList}>{list}</li>;
                  })}
                </ul>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
