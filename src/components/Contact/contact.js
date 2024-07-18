import React, { useRef } from 'react';
import './contact.css';
import clientImg1 from '../../assets/auso.jpeg';
import facebook from  '../../assets/107175_circle_facebook_icon.png';
import linkedin from '../../assets/771382_channel_circle_logo_media_social_icon.png';
import twitter from '../../assets/107178_circle_linkedin_icon.png';
import youtube from '../../assets/6636566_instagram_social media_social network_icon.png';
import insta from '../../assets/4555889_code_github_hosting_learning_programmer_icon.png';
import upwork from '../../assets/upwork.jpg';


import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k5c1dld', 'template_tk1naa5', form.current, {publicKey: 'iATQ_uF7176ZoCQwu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
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
                <img src={upwork} alt='' className='clientsImg'/>
                </div>
            </div>
            <div id='contact'>
                <h1 className='clientsTitle'>Contact Me</h1>
                <span className='contactDesc'>If you would like to discuss a project or have any questions, please feel free to contact me. I am open to new opportunities and collaborations.</span>
                <form className='contactForm' ref={form}  onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name="user_name"/>
                    <input type='email' className='email' placeholder='Your Email' name="user_email"/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value="Send" className='submitBtn'>Submit</button>
                    <div className='links'>
                       <a href='https://web.facebook.com/'><img src={facebook}alt='facebook' className='link'/></a> 
                       <a href='www.linkedin.com/in/sahan-sachintha-56a49b284'> <img src={linkedin} alt='linkedin' className='link'/></a>
                       <a href='https://www.youtube.com/@user-px7gw7nv4n'> <img src={twitter} alt='twitter' className='link'/></a>
                       <a href='https://www.youtube.com/@user-px7gw7nv4n'><img src={youtube} alt='youtube' className='link'/></a>
                       <a href='https://www.youtube.com/@user-px7gw7nv4n'><img src={insta} alt='instagram' className='link'/></a>
                    </div>
                </form>
            </div>
    </section>
  );
}

export default Contact