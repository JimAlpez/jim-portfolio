import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white py-5 sticky top-0 z-10">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold">
          Alpez<span className="text-xs">.site</span>
        </Link>
        <nav className="text-sm hidden sm:block">
          <ul className="flex items-center gap-8">
            <Link to="/">Home</Link>
            <AnchorLink offset={50} href="#services">
              Services
            </AnchorLink>
            <AnchorLink offset={50} href="#projects">
              Projects
            </AnchorLink>
            <AnchorLink offset={50} href="#testimonials">
              Testimonials
            </AnchorLink>
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <button className="text-sm uppercase font-medium text-white py-2 px-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500">
            Let's Talk
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        <nav
          className={`sm:hidden bg-black fixed top-[76px] right-0 bottom-0 w-52 transition-all duration-500 ease-in-out ${
            isOpen ? "mr-0" : "-mr-52"
          }`}>
          <ul className="flex flex-col gap-2 py-4 px-6">
            <Link to="/">Home</Link>
            <AnchorLink offset={50} href="#services">
              Services
            </AnchorLink>
            <AnchorLink offset={50} href="#projects">
              Projects
            </AnchorLink>
            <AnchorLink offset={50} href="#testimonials">
              Testimonials
            </AnchorLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
