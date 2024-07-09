import React from 'react'
import './skills.css';
import Front from '../../assets/frontend.png';
import Back from '../../assets/backend.png';
import Devops from '../../assets/devops.png';

const Skills = () => {
  return (
   <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a self-employed full-stack software engineer specializing in complete web applications. I handle front-end (HTML, CSS, JavaScript) and back-end (Node.js, PHP) development, manage databases, ensure security and performance, and collaborate with clients to deliver high-quality software.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Front} alt='Front-end'className="skillBarImg"/>
                <div className='skillBarText'>
                    <h2>Front-end Development</h2>
                    <p>In front-end development, I design and build user interfaces using HTML, CSS, and JavaScript. I work with frameworks like React, Angular, or Vue.js to create responsive applications that work seamlessly across devices and browsers, and implement client-side validation to enhance user experience.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Back} alt='Back-end'className="skillBarImg"/>
                <div className='skillBarText'>
                    <h2>Back-end Development</h2>
                    <p>In back-end development, I design and build server-side logic and APIs using languages like Node.js, Python, Ruby, Java, or PHP. I manage databases with SQL or NoSQL systems like MySQL, PostgreSQL, MongoDB, or Redis, and implement authentication and authorization mechanisms to ensure secure access to the application.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Devops} alt='Dev-ops'className="skillBarImg"/>
                <div className='skillBarText'>
                    <h2>DevOps and Maintenance</h2>
                    <p>In DevOps and maintenance, I implement practices to streamline development and deployment, monitor and maintain application uptime and performance, and handle incident management and post-mortem analysis to prevent future issues.
                    </p>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Skills
