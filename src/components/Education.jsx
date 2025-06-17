// src/components/Education.jsx
import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="px-6 py-16 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Education</h2>
      <div className="max-w-4xl mx-auto space-y-10">

        {/* NIT Patna */}
        <div className="relative bg-gray-100 p-6 rounded-xl shadow-md border-l-4 border-blue-600">
          <div className="absolute -left-6 top-6 text-blue-600 text-2xl">
            <FaGraduationCap />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">National Institute of Technology, Patna</h3>
          <p className="text-sm text-gray-600 mt-1">B.Tech, Electronics and Communication Engineering (Graduation: 2026)</p>
          <p className="mt-2 text-gray-700">CGPA: <strong>7.99</strong> (Till 5th Semester)</p>
          <p className="mt-2 text-gray-700">
            <strong>Relevant Coursework:</strong> Digital Electronics, Signals and Systems, VLSI Design, Data Structures, Algorithms
          </p>
          <p className="mt-1 text-sm text-green-700 font-medium">Academic Achievement: Consistently ranked among the top 20</p>
        </div>

        {/* JNV 12th */}
        <div className="relative bg-gray-100 p-6 rounded-xl shadow-md border-l-4 border-blue-600">
          <div className="absolute -left-6 top-6 text-blue-600 text-2xl">
            <FaSchool />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Jawahar Navodaya Vidyalaya, Rewar (Bihar)</h3>
          <p className="text-sm text-gray-600 mt-1">Central Board of Secondary Education, Intermediate</p>
          <p className="mt-2 text-gray-700">Year of Completion: <strong>2021</strong></p>
          <p className="text-gray-700">Percentage: <strong>91.2%</strong></p>
        </div>

        {/* JNV 10th */}
        <div className="relative bg-gray-100 p-6 rounded-xl shadow-md border-l-4 border-blue-600">
          <div className="absolute -left-6 top-6 text-blue-600 text-2xl">
            <FaSchool />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Jawahar Navodaya Vidyalaya, Rewar (Bihar)</h3>
          <p className="text-sm text-gray-600 mt-1">Central Board of Secondary Education, Matriculation</p>
          <p className="mt-2 text-gray-700">Year of Completion: <strong>2019</strong></p>
          <p className="text-gray-700">Percentage: <strong>84.8%</strong></p>
        </div>

      </div>
    </section>
  );
};

export default Education;
