import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/briefcase.png';
import {useTypewriter,Cursor} from 'react-simple-typewriter';

const Intro = () => {
  const [text] = useTypewriter({
    words: ['Sahan','Sachintha','Athapaththu'],
    loop: 0
  })
  

  return (
   <section id='intro'>
    <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className='introName'>{text}<Cursor/></span><br/>Software Developer</span>
        <p className="introPara">I am a skilled full-stack software developer with extensive experience in creating <br/>comprehensive software solutions. </p>
        <Link><button className="btn"><img src={btnImg} alt='Hire'className="btnImg"/>Hire Me</button></Link>
    </div>
    <img src={bg} alt="portfolio" className="bg" />
   </section>
    
  )
}

export default Intro
