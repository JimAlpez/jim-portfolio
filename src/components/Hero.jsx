import React from "react";

import JimImage from "../assets/JimImage.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="container res-padding flex items-center flex-col-reverse sm:flex-row gap-y-12 gap-x-7 md:gap-10">
      <div className="w-full space-y-8 text-center sm:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-[1.2em]">
          Hello, I'm Jim, Frontend Developer based in Philippines.
        </h1>
        <p>
          I am a Freelance frontend web developer with more than 2 years of
          experience.
        </p>
        <div className="flex justify-center items-center gap-5 flex-wrap">
          <Button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500">
            Get in touch
          </Button>
          <Button className="border border-black">View all works</Button>
        </div>
      </div>
      <div className="w-full">
        <img className="w-11/12 mx-auto" src={JimImage} alt="Jim Alpez" />
      </div>
    </div>
  );
};

export default Hero;
