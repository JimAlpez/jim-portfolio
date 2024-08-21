import React from "react";

const Heading = ({ className = "", children }) => {
  return (
    <h2
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold !leading-[1.2em] ${className}`}>
      {children}
    </h2>
  );
};

export default Heading;
