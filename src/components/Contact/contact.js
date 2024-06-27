import React from 'react'
import './contact.css';
import clientImg1 from '../../assets/auso.jpeg';
import facebook from  '../../assets/facebook-icon.png';
import linkedin from '../../assets/linked.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import insta from '../../assets/instagram.png';

const Contact = () => {
  return (
    <section id='contactPage'>
            <div id='clients'>
                <h1 className='clientsTitle'>My Clients</h1>
                <p className='clientsDesc'>
                I have worked with many clients, including Auso World Pvt Ltd, developing web applications and software solutions to meet their specific
                 needs and improve their operations.
                </p>
                <div className='clientsImgs'>
                <img src={clientImg1} alt='' className='clientsImg'/>
                </div>
            </div>
            <div id='contact'>
                <h1 className='clientsTitle'>Contact Me</h1>
                <span className='contactDesc'>If you would like to discuss a project or have any questions, please feel free to contact me. I am open to new opportunities and collaborations.</span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Your Name'/>
                    <input type='email' className='email' placeholder='Your Email'/>
                    <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value="send" className='submitBtn'>Submit</button>
                    <div className='links'>
                        <img src={facebook}alt='facebook' className='link'/>
                        <img src={linkedin} alt='linkedin' className='link'/>
                        <img src={twitter} alt='twitter' className='link'/>
                        <img src={youtube} alt='youtube' className='link'/>
                        <img src={insta} alt='instagram' className='link'/>
                    </div>
                </form>
            </div>
    </section>
  );
}

export default Contact