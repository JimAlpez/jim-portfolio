import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Heading from "./Heading";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white">
        <div className="container res-padding flex items-center justify-between flex-col sm:flex-row gap-y-8 text-center sm:text-left">
          <Heading className="w-full sm:w-3/4 sm:pr-5 !font-medium">
            Have An Awesome Project Idea? Let's Discuss
          </Heading>
          <button className="font-medium text-lg w-40 h-40 grid place-content-center focus:shadow-none hover:shadow-lg !shadow-black/50 transition-all hover:scale-105 focus:scale-100 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500">
            Start Project
          </button>
        </div>
      </div>
      <div className="container res-padding flex items-start justify-between gap-x-5 gap-y-10  flex-col sm:flex-row text-center sm:text-left">
        <div className="space-y-5 w-full">
          <Link to="/" className="text-3xl font-bold">
            Alpez<span className="text-xs">.site</span>
          </Link>
          <p>
            I am a Freelance frontend web developer with more than 2 years of
            experience.
          </p>
        </div>
        <div className="space-y-5 w-full">
          <ul className=" flex items-center justify-center sm:justify-end gap-10">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
          </ul>
          <div className="flex items-center justify-center sm:justify-end gap-5">
            <a
              href="#"
              target="_blank"
              className="rounded-full border-2 border-l-indigo-500 border-y-purple-500 border-r-orange-500 w-10 h-10 grid place-content-center focus:shadow-none hover:shadow-md !shadow-black/50 transition-all hover:scale-105 focus:scale-100">
              <FaFacebookF className="text-lg" />
            </a>
            <a
              href="#"
              target="_blank"
              className="rounded-full border-2 border-l-indigo-500 border-y-purple-500 border-r-orange-500 w-10 h-10 grid place-content-center focus:shadow-none hover:shadow-md !shadow-black/50 transition-all hover:scale-105 focus:scale-100">
              <FaLinkedinIn className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
