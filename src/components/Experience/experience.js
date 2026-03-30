import React from 'react';
import './experience.css';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'LINK Lanka',
      position: 'Associate Software Engineer',
      duration: 'July 2025 - Present',
      type: 'Full-time',
      description: 'Currently contributing to software development projects...',
      highlights: [
        'Full-stack web application development',
        'Collaborating with development teams',
        'Building scalable solutions'
      ]
    },
    {
      id: 2,
      company: 'JLanka Technologies (Pvt) Ltd.',
      position: 'Full Stack Developer',
      duration: 'Feb 2025 – July 2025',
      type: 'Full-time',
      description: 'Developed, updated, and maintained software systems to ensure smooth functionality and optimal performance.',
      highlights: [
        'Full-stack web development with ReactJS and Laravel',
        'Database design and management with MySQL',
        'System troubleshooting and performance optimization',
        'Collaborating with teams on technical improvements'
      ]
    },
    {
      id: 3,
      company: 'JLanka Technologies (Pvt) Ltd.',
      position: 'Trainee Web Developer (Internship)',
      duration: 'Aug 2024 – Feb 2025',
      type: 'Internship',
      description: 'Involved in developing, updating, and maintaining software systems to ensure smooth operation.',
      highlights: [
        'Web development fundamentals',
        'Bug fixing and system maintenance',
        'Applied updates to existing projects',
        'User experience improvements'
      ]
    }
  ];

  return (
    <section id='experience'>
      <h2 className='experienceTitle'>Work Experience</h2>
      <p className='experienceDesc'>6+ months of professional experience developing web applications and software solutions</p>
      
      <div className='experienceContainer'>
        {experiences.map((exp) => (
          <div key={exp.id} className='experienceCard'>
            <div className='experienceHeader'>
              <div className='companyInfo'>
                <FaBriefcase className='experienceIcon' />
                <div className='companyDetails'>
                  <h3>{exp.position}</h3>
                  <p className='companyName'>{exp.company}</p>
                </div>
              </div>
              <span className='experienceType'>{exp.type}</span>
            </div>
            
            <div className='experienceMeta'>
              <FaCalendar className='dateIcon' />
              <span className='duration'>{exp.duration}</span>
            </div>
            
            <p className='experienceText'>{exp.description}</p>
            
            <ul className='highlights'>
              {exp.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
