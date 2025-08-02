import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <nav className="w-full h-[80%] mb-12 px-6 py-4 flex justify-between items-center 
  bg-white/15 border-t-2 border-l-2 border-white/40 
    shadow-[5px_5px_12px_#00000035] backdrop-blur-sm rounded-3xl overflow-hidden">

      <div className="text-2xl font-bold text-gray-800">DSA_P</div>
      <div className="flex space-x-4">
        <Link
          to="/"
          className="px-4 py-2 text-black hover:text-blue-600 hover:-translate-y-1 transition-all duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-sans px-4 py-2 text-black hover:text-blue-600 hover:-translate-y-1 transition-all duration-200"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
