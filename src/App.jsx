import React from 'react';
import Navbar from './components/Navbar';
import Education from './components/Education';

import About from './components/About'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;