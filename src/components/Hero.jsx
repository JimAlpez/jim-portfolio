import React from "react";

import JimImage from "/JimImage.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="container res-padding flex items-center flex-col-reverse sm:flex-row gap-y-12 gap-x-7 md:gap-10">
      <div className="w-full space-y-8 text-center sm:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-[1.2em]">
          Hello,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 via-indigo-500 to-sky-500">
            I'm Jim
          </span>
          , Frontend Developer based in Philippines.
        </h1>
        <p>
          I am a Freelance frontend web developer with more than 2 years of
          experience.
        </p>
        <div className="flex justify-center items-center gap-5 flex-wrap">
          <Button className="bg-[#eaedf2]">Get in touch</Button>
          <Button className="bg-gradient-to-tl from-blue-500 via-indigo-500 to-sky-500 text-white">
            Hire Me
          </Button>
        </div>
      </div>
      <div className="w-full">
        <img className="w-11/12 mx-auto" src={JimImage} alt="Jim Alpez" />
      </div>
    </div>
  );
};

export default Hero;
