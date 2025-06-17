import React from 'react';
import logo from '../img/logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Logo + Name */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10 rounded-full mr-3 border border-gray-300 shadow-sm" />
          <span className="text-2xl font-bold text-gray-800 tracking-wide hover:text-blue-600 transition duration-200">
            Sachin Kumar
          </span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-base font-medium hidden md:flex">
          <a href="#about" className="text-gray-700 hover:text-blue-500 transition duration-150">About</a>
          <a href="#education" className="text-gray-700 hover:text-blue-500 transition duration-150">Education</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-500 transition duration-150">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-500 transition duration-150">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500 transition duration-150">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
