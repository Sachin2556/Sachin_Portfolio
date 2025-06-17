import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Have a Question?</h3>
          <p className="flex items-center gap-2"><MdLocationOn /> Patna, Bihar, India</p>
          <p className="flex items-center gap-2"><MdPhone /> +91 8789325171</p>
          <p className="flex items-center gap-2">
            <MdEmail />
            <a href="mailto:sachink.ug22.ec@nitp.ac.in" className="text-blue-400 hover:underline">
              sachink.ug22.ec@nitp.ac.in
            </a>
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {/* <li><a href="#home" className="hover:text-blue-400">Home</a></li> */}
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#education" className="hover:text-blue-400">Education</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with Me</h3>
          <div className="flex flex-col space-y-2">
            <a
              href="https://github.com/Sachin2556"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/sachin-raj-3a1600202"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} All rights reserved | Sachin and Co.
      </div>
    </footer>
  );
};

export default Footer;
