import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

import { navLinks } from "../assets/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="backdrop-blur-md bg-white/30 py-5 container flex items-center justify-between sticky top-0 sm:top-4 left-0 z-10 sm:rounded-xl sm:border shadow-lg shadow-black/50">
        <Link to="/" className="text-3xl font-bold">
          Alpez<span className="text-xs">.site</span>
        </Link>
        <nav className="text-sm hidden sm:block">
          <ul className="flex items-center gap-8">
            <Link to="/">Home</Link>
            {navLinks.map((item, index) => {
              return (
                <AnchorLink offset={50} key={index} href={item.link}>
                  {item.name}
                </AnchorLink>
              );
            })}
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
      </header>
      <nav
        className={`sm:hidden z-10 backdrop-blur-md bg-white/30 shadow shadow-black/50 fixed top-[76px] right-0 bottom-0 w-52 transition-all duration-500 ease-in-out ${
          isOpen ? "mr-0" : "-mr-52"
        }`}>
        <ul className="flex flex-col gap-2 py-4 px-6">
          <Link to="/">Home</Link>
          {navLinks.map((item, index) => {
            return (
              <AnchorLink offset={50} key={index} href={item.link}>
                {item.name}
              </AnchorLink>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
