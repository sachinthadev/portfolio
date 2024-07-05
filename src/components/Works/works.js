import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/chat.png';
import pizza from '../../assets/pizzahut.png';
import pot from '../../assets/pot.png';
import pot1 from '../../assets/pot1.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I have developed various projects, including web applications and software solutions, handling both front-end and back-end development. My work involved designing user interfaces, creating server-side logic, managing databases, and ensuring smooth deployment and maintenance.</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='thm' className='worksImg'/>
            <img src={pizza} alt=' thm' className='worksImg'/>
            <img src={pot} alt=' thm' className='worksImg'/>
            <img src={Portfolio1}alt=' thm' className='worksImg'/>
            <img src={pot1} alt='thm ' className='worksImg'/>
            
        </div>
        <button className='worksBtn'>See More</button>
        
    </section>
  );
}

export default Works;