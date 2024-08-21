import React from "react";

const Button = ({ className = "", children }) => {
  return (
    <button
      className={`w-full sm:w-auto text-lg py-3 px-4 md:px-5 lg:px-7 uppercase font-medium text-black focus:shadow-none hover:shadow-lg !shadow-black/50 transition-all hover:scale-105 focus:scale-100 rounded-full ${className}`}>
      {children}
    </button>
  );
};

export default Button;
