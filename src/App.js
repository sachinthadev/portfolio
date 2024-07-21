
import React from 'react';
import Navbar from '../src/components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Particle from './components/particles';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Skills/>
       <Works/>
       <Contact/>
      <Footer/>
      <Particle/>
    </div>

  );
}

export default App;