import React from 'react';
import './contact.css';
import clientImg1 from '../../assets/auso.jpeg';
import facebook from  '../../assets/107175_circle_facebook_icon.png';
import linkedin from '../../assets/771382_channel_circle_logo_media_social_icon.png';
import twitter from '../../assets/107178_circle_linkedin_icon.png';
import youtube from '../../assets/6636566_instagram_social media_social network_icon.png';
import insta from '../../assets/4555889_code_github_hosting_learning_programmer_icon.png';
import upwork from '../../assets/upwork.jpg';





const Contact = () => {
   const [result, setResult] = React.useState("");
   const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bc70a5f2-0fb6-46b3-ba42-c691805a018b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
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
                <form className='contactForm' onSubmit={onSubmit}>
                    <input type='text' className='name' placeholder='Your Name' name="name" required/>
                    <input type='email' className='email' placeholder='Your Email' name="email" required/>
                    <textarea className='msg' name="message" required rows="5" placeholder='Your Message'></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className='links'>
                       <a href='https://web.facebook.com/'><img src={facebook}alt='facebook' className='link'/></a> 
                       <a href='https://www.youtube.com/@user-px7gw7nv4n'> <img src={linkedin} alt='linkedin' className='link'/></a>
                       <a href='www.linkedin.com/in/sahan-sachintha-56a49b284'> <img src={twitter} alt='twitter' className='link'/></a>
                       <a href='https://www.instagram.com/sachintha.dev/?igsh=Zm1xZHEwaXhra3hk&utm_source=qr'><img src={youtube} alt='youtube' className='link'/></a>
                       <a href='https://github.com/sachinthadev'><img src={insta} alt='instagram' className='link'/></a>
                    </div>
                </form>
                <span>{result}</span>
            </div>
    </section>
  );
}

export default Contact