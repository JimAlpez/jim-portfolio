import React from "react";

import JimImage from "../assets/JimImage.png";

const Hero = () => {
  return (
    <div className="container res-padding flex items-center flex-col-reverse sm:flex-row gap-y-12 gap-x-7 md:gap-10">
      <div className="w-full space-y-8 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold !leading-[1.2em]">
          Hello, I'm Jim, Frontend Developer based in Philippines.
        </h1>
        <p>
          I am a Freelance frontend web developer with more than 2 years of
          experience.
        </p>
        <div className="flex justify-center items-center gap-5 flex-wrap">
          <button className="w-full sm:w-auto text-base lg:text-lg py-3 px-4 md:px-5 lg:px-7 uppercase font-medium text-black shadow focus:shadow hover:shadow-lg !shadow-black/50 transition-all hover:scale-105 focus:scale-100 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-orange-400">
            Get in touch
          </button>
          <button className="w-full sm:w-auto text-base lg:text-lg py-3 px-4 md:px-5 lg:px-7 uppercase font-medium text-black shadow focus:shadow hover:shadow-lg !shadow-black/50 transition-all hover:scale-105 focus:scale-100 rounded-full border border-black">
            View all works
          </button>
        </div>
      </div>
      <div className="w-full">
        <img className="w-11/12 mx-auto" src={JimImage} alt="Jim Alpez" />
      </div>
    </div>
  );
};

export default Hero;
