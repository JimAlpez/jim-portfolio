import React from "react";

const Button = ({ className = "", children }) => {
  return (
    <button
      className={`w-full sm:w-auto text-lg py-3 px-4 md:px-5 lg:px-7 uppercase font-bold border border-black/20 shadow-lg focus:shadow-none shadow-black/20 transition-all scale-105 focus:scale-100 rounded-lg ${className}`}>
      {children}
    </button>
  );
};

export default Button;
