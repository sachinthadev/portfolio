import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
import clientImg1 from '../../assets/auso.jpeg';
import facebook from  '../../assets/facebook-icon.png';
import linkedin from '../../assets/linked.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import insta from '../../assets/instagram.png';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
      });
  };
 
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
                <h1 className='clientsTitle'>Get In Touch</h1>
                <span className='contactDesc'>I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or have any questions!</span>
                <form ref={form} className='contactForm' onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name="user_name" required/>
                    <input type='email' className='email' placeholder='Your Email' name="user_email" required/>
                    <textarea className='msg' name='message' rows="5" placeholder='Your Message' required></textarea>
                    <button type='submit' value="send" className='submitBtn'>Send Message</button>
                    <div className='links'>
                        <a href='https://www.linkedin.com/in/sahan-sachintha-56a49b284' target='_blank' rel='noopener noreferrer' title='LinkedIn'>
                            <img src={linkedin} alt='linkedin' className='link'/>
                        </a>
                        <a href='https://github.com/sachinthadev' target='_blank' rel='noopener noreferrer' title='GitHub'>
                            <img src={insta} alt='instagram' className='link'/>
                        </a>
                        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' title='Facebook'>
                            <img src={facebook} alt='facebook' className='link'/>
                        </a>
                        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' title='Twitter'>
                            <img src={twitter} alt='twitter' className='link'/>
                        </a>
                        <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer' title='YouTube'>
                            <img src={youtube} alt='youtube' className='link'/>
                        </a>
                    </div>
                </form>

                <div className='contactInfo'>
                    <div className='contactItem'>
                        <h4>Email</h4>
                        <a href='mailto:sahansachintha.dev@gmail.com'>sahansachintha.dev@gmail.com</a>
                    </div>
                    <div className='contactItem'>
                        <h4>Phone</h4>
                        <a href='tel:+94772428224'>+94 772428224</a>
                    </div>
                    <div className='contactItem'>
                        <h4>Location</h4>
                        <p>Sri Lanka</p>
                    </div>
                </div>
            </div>
    </section>
  );
}

export default Contact