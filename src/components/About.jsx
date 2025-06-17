import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import myImage from '../img/king.jpg'; // Ensure this path is correct

const Hero = () => {
  return (
   <div className="flex flex-col md:flex-row items-center justify-between px-6 py-16 min-h-screen bg-gray-100 gap-12" id="about">
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 space-y-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hi!! This is Sachin Kumar
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
          I am a{" "}
          <ReactTyped
            strings={[
              "Front End Developer",
              "Web Developer",
              "Problem-Solver",
              "Coder",
              "DSA Enthusiast",
            ]}
            typeSpeed={100}
            backSpeed={80}
            loop
          />
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          A passionate Software Engineering student at NIT Patna (Batch of 2026), dedicated
          to building performant and accessible web applications. Experienced in
          frontend frameworks, enthusiastic about algorithms, and driven to solve
          real-world problems through code.
        </p>

        {/* Merged About Text */}
        <div className="pt-4 border-t border-gray-300">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            I love solving real-world problems through intuitive web solutions. My goal is to constantly
            improve my skills and contribute to impactful projects while collaborating with great teams.
          </p>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={myImage}
          alt="Sachin"
          className="rounded-2xl shadow-xl w-64 md:w-80 object-cover border-4 border-white"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
