import React from 'react';
import { FaCode, FaTools, FaBrain, FaNetworkWired } from 'react-icons/fa';
import { MdLaptopMac } from 'react-icons/md';

const skillsData = [
  {
    title: 'Programming Languages',
    icon: <FaCode className="text-blue-500 text-xl mr-2" />,
    items: ['C++', 'JavaScript', 'Python', 'HTML', 'CSS','React','Node.js'],
  },
  {
    title: 'Technologies',
    icon: <FaNetworkWired className="text-green-500 text-xl mr-2" />,
    items: [
      'Data Structures & Algorithms',
      'Problem Solving',
      'OOP',
      'Operating Systems',
      'Computer Networks',
      'DBMS',
    ],
  },
  {
    title: 'Tools',
    icon: <FaTools className="text-purple-500 text-xl mr-2" />,
    items: ['Git & GitHub', 'VS Code', 'Xilinx'],
  },
  {
    title: 'I am really good at',
    icon: <FaBrain className="text-yellow-500 text-xl mr-2" />,
    items: ['Problem Solving', 'Web Development', 'Software Engineering'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Skills</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-3 mt-4">
              {category.items.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
