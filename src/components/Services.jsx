import React from "react";

import Heading from "./Heading";
import { Accordion } from "react-bootstrap-accordion";
import Slider from "react-slick";
import "react-bootstrap-accordion/dist/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiStarFourFill } from "react-icons/pi";

const Services = () => {
  var settings = {
    dots: false,
    infinite: true,
    swipeToSlide: false,
    autoplay: true,
    pauseOnHover: false,
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
    <section id="services">
      <div className="hidden sm:block h-24 w-full bg-gradient-to-r from-indigo-400 via-purple-400 to-orange-400"></div>
      <div className="hidden sm:block -mt-20 h-20 -mx-2 px-5 bg-white shadow-lg border -rotate-3">
        <div className="slider-container text-2xl font-bold mt-5">
          <Slider {...settings}>
            <div className="!flex items-center justify-center gap-5">
              <PiStarFourFill />
              <h3>Maintenance</h3>
            </div>
            <div className="!flex items-center justify-center gap-5">
              <PiStarFourFill />
              <h3>Updates</h3>
            </div>
            <div className="!flex items-center justify-center gap-5">
              <PiStarFourFill />
              <h3>E-commerce</h3>
            </div>
            <div className="!flex items-center justify-center gap-5">
              <PiStarFourFill />
              <h3>SEO</h3>
            </div>
            <div className="!flex items-center justify-center gap-5">
              <PiStarFourFill />
              <h3>Hosting</h3>
            </div>
            <div className="!flex items-center justify-center gap-5">
              <PiStarFourFill />
              <h3>Domain</h3>
            </div>
            <div className="!flex items-center justify-center gap-5">
              <PiStarFourFill />
              <h3>Managing</h3>
            </div>
            <div className="!flex items-center justify-center gap-5">
              <PiStarFourFill />
              <h3>Development</h3>
            </div>
            <div className="!flex items-center justify-center gap-5">
              <PiStarFourFill />
              <h3>Custom</h3>
            </div>
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
            <button className="w-full sm:w-auto text-base lg:text-lg py-3 px-4 md:px-5 lg:px-7 uppercase font-medium text-black shadow focus:shadow hover:shadow-lg !shadow-black/50 transition-all hover:scale-105 focus:scale-100 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-orange-400">
              Get in touch
            </button>
          </div>
        </div>
        <div className="w-full space-y-6">
          <Accordion title="Custom Website Design & Development">
            <ul className="list-disc pl-4 space-y-4">
              <li>
                Design and build fully customized websites tailored to your
                brand’s needs.
              </li>
              <li>
                Responsive design ensuring seamless experience across all
                devices.
              </li>
              <li>
                Use of modern frameworks and technologies like WordPress, React,
                and more.
              </li>
            </ul>
          </Accordion>
          <Accordion title="Web Hosting and Domain Management">
            <ul className="list-disc pl-4 space-y-4">
              <li>Assistance with selecting the right hosting solution.</li>
              <li>Domain registration and management.</li>
              <li>Setup of SSL certificates and website security features.</li>
            </ul>
          </Accordion>
          <Accordion title="Maintenance and Support">
            <ul className="list-disc pl-4 space-y-4">
              <li>
                Regular updates to keep your website secure and running
                smoothly.
              </li>
              <li>Content updates, bug fixes, and feature enhancements.</li>
              <li>Performance optimization and SEO improvements.</li>
            </ul>
          </Accordion>
          <Accordion title="Content Management Systems (CMS)">
            <ul className="list-disc pl-4 space-y-4">
              <li>
                Expertise in WordPress, Joomla, Drupal, and other CMS platforms.{" "}
              </li>
              <li>
                Creation of user-friendly interfaces for easy content
                management.
              </li>
              <li>
                Plugin development and customization for added functionality.
              </li>
            </ul>
          </Accordion>
          <Accordion title="SEO and Digital Marketing">
            <ul className="list-disc pl-4 space-y-4">
              <li>
                On-page and off-page SEO strategies to increase visibility in
                search engines.
              </li>
              <li>
                Integration of analytics and tracking tools for data-driven
                decisions.
              </li>
              <li>
                Social media integration and content marketing strategies.
              </li>
            </ul>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Services;
