"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";

import { SKILLS_DATA } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SkillsSection() {
  const { theme } = useTheme();

  const settings = {
    dots: false,
    arrows: false,
    swipeToSlide: false,
    draggable: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-5xl mx-auto scroll-mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.2,
          },
        }}
        viewport={{ once: true }}
        className={`m-1 p-6 rounded-xl shadow-lg border-t-2 ${
          theme === "light"
            ? "shadow-slate-100/50 border-slate-100/30"
            : "shadow-slate-900/30 border-slate-900/30"
        }`}>
        <Slider {...settings}>
          {SKILLS_DATA.map((skill) => (
            <div key={skill.title}>
              <div className="text-center space-y-2">
                <div className="grid place-items-center text-5xl">
                  {skill.icon}
                </div>
                <p className="text-xs font-semibold tracking-normal">
                  {skill.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}
