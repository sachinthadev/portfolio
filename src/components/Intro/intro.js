import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/briefcase.png';

const Intro = () => {
  return (
   <section id="intro">
    <div className="introContent">
        <span className="hello">Hello, I'm</span>
        <span className="introText"><span className='introName'>Sahan Sachintha Athapaththu</span></span>
        <span className="introTitle">Full Stack Developer & Associate Software Engineer</span>
        <p className="introPara">A passionate full-stack developer with 6+ months of industry experience at LINK Lanka. Specialized in building comprehensive web applications using React, Laravel, and modern technologies. Always striving to learn and deliver exceptional results.</p>
        <Link to='contact' smooth={true} offset={-65} duration={500}><button className="btn"><img src={btnImg} alt='Hire'className="btnImg"/>Get In Touch</button></Link>
    </div>
    <img src={bg} alt="portfolio" className="bg" />
   </section>
    
  )
}

export default Intro
