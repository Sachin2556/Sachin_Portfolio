import React from 'react';

const projects = [
  {
    id: 1,
    title: 'RoomZX',
    description: 'A rental platform simplifying room searches and eliminating the need for physical "To-let" boards.',
    github: 'https://github.com/Princy2909/RoomZy.git',
  },
  {
    id: 2,
    title: 'DevTinder',
    description: 'A full-stack platform for developers to connect, network, and collaborate.',
    github: 'https://github.com/Sachin2556/DevTinder_Frontend.git',
  },
  {
    id: 3,
    title: 'East Central Railway',
    description: 'A responsive multi-page website for East Central Railway with an admin panel to manage users, built using HTML, CSS, JavaScript, PHP, and MySQLi.',
    github: 'https://github.com/Sachin2556/East-Central-Railway.git',
    live: 'https://eastcentral-railway-sachin-kumars-projects-8c387a35.vercel.app/'
  },
  {
    id: 4,
    title: 'Password Generator',
    description: 'Generate robust and secure passwords using customizable criteria.',
    github: 'https://github.com/Sachin2556/Paasword-Generator.git',
    live: 'https://sachin2556.github.io/Paasword-Generator/'
  },
  {
    id: 5,
    title: 'Razorpay Clone',
    description: 'A static clone of the Razorpay homepage using only HTML and CSS.',
    github: 'https://github.com/Sachin2556/Razorpay.git',
    live: 'https://sachin2556.github.io/Razorpay/'
  },
  {
    id: 6,
    title: 'Weather App',
    description: 'A weather website built using HTML, CSS, and JavaScript that provides real-time climate updates, focusing on temperature, humidity, and weather conditions of any searched location.',
    github: 'https://github.com/Sachin2556/Weather-app.git',
    live: 'https://sachin2556.github.io/Weather-app/'
  },

];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
