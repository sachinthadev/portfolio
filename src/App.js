
import React from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Experience from './components/Experience/experience';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/skills';
import Education from './components/Education/education';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Experience/>
       <Projects/>
       <Skills/>
       <Education/>
       <Contact/>
      <Footer/>
    </div>

  );
}

export default App;
