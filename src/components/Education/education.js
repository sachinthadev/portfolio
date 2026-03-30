import React from 'react';
import './education.css';
import { FaGraduationCap, FaCalendar } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Higher National Diploma in Information Technology',
      institution: 'Sri Lanka Institute of Advanced Technological Education (SLIATE)',
      duration: 'Sep 2022 – Aug 2025',
      gpa: '3.42',
      status: 'Completed',
      details: [
        'Full-stack web development',
        'Database design and management',
        'Software engineering principles',
        'System analysis and design'
      ]
    },
    {
      id: 2,
      degree: 'Cisco Certified Network Associate (CCNA)',
      institution: 'University of Moratuwa',
      duration: 'Mar 2025 – Reading',
      status: 'In Progress',
      details: [
        'Advanced networking concepts',
        'Network architecture and design',
        'Routing and switching',
        'Network troubleshooting'
      ]
    },
    {
      id: 3,
      degree: 'Advanced Level Examination',
      institution: 'Kumbukgete Central College',
      duration: 'Jan 2018 – Nov 2020',
      indexNum: '2681859',
      streams: ['Engineering Technology (S)', 'Science for Technology (S)', 'I.C.T (C)'],
      status: 'Completed',
      details: [
        'Technology stream specialization',
        'Advanced subject knowledge',
        'Foundation for higher education'
      ]
    },
    {
      id: 4,
      degree: 'Diploma in Information Technology & Business English',
      institution: 'IMBS Green Campus',
      duration: 'Jan 2017 – Jan 2018',
      status: 'Completed',
      details: [
        'IT fundamentals',
        'Business communication',
        'Professional English skills'
      ]
    }
  ];

  return (
    <section id='education'>
      <h2 className='educationTitle'>Education & Certifications</h2>
      <p className='educationDesc'>Continuous learning and professional development</p>
      
      <div className='educationContainer'>
        {education.map((edu) => (
          <div key={edu.id} className='educationCard'>
            <div className='educationHeader'>
              <div className='degreeInfo'>
                <FaGraduationCap className='educationIcon' />
                <div>
                  <h3>{edu.degree}</h3>
                  <p className='institution'>{edu.institution}</p>
                </div>
              </div>
              <span className={`educationStatus ${edu.status.toLowerCase().replace(' ', '-')}`}>
                {edu.status}
              </span>
            </div>
            
            <div className='educationMeta'>
              <FaCalendar className='dateIcon' />
              <span>{edu.duration}</span>
              {edu.gpa && <span className='gpa'>GPA: {edu.gpa}</span>}
              {edu.indexNum && <span className='indexNum'>Index: {edu.indexNum}</span>}
            </div>

            {edu.streams && (
              <div className='streams'>
                <strong>Streams:</strong>
                <ul>
                  {edu.streams.map((stream, idx) => (
                    <li key={idx}>{stream}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className='educationHighlights'>
              {edu.details.map((detail, idx) => (
                <div key={idx} className='educationPoint'>
                  <span className='dot'></span>
                  {detail}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
