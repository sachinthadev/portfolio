import React from 'react';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'DocuSign e-Signature Management System',
      description: 'Built an e-Signature management system using PHP and Data Tables. Users can convert their e-signature into documents easily via this portal.',
      technologies: ['PHP', 'DataTable', 'HTML', 'CSS', 'Bootstrap', 'SQL'],
      highlights: [
        'E-signature conversion and management',
        'User-friendly document portal',
        'Database-driven solution'
      ]
    },
    {
      id: 2,
      title: 'HRIS Attendance Management System',
      description: 'Developed an Attendance and leave management system for HR Department with user-friendly UI and Flutter core mobile app.',
      technologies: ['PHP', 'JavaScript', 'Flutter', 'SQL', 'Ajax', 'jQuery'],
      highlights: [
        'Attendance tracking system',
        'Leave management features',
        'Cross-platform mobile app',
        'Real-time data synchronization'
      ]
    },
    {
      id: 3,
      title: 'Sweet Maker AI App (Android)',
      description: 'Developed UI and backend concept for a mobile app targeting Indian sweet shops with login, registration, and inventory features.',
      technologies: ['Flutter', 'Laravel', 'Dialog Flow', 'MQTT', 'Webhook', 'Google Cloud'],
      highlights: [
        'AI-powered chatbot integration',
        'Inventory management system',
        'User authentication',
        'Cloud deployment'
      ]
    },
    {
      id: 4,
      title: 'Solar PV Voltage Measure IOT Device',
      description: 'Research and developed a device for measuring solar panel voltages in series and implement solar optimizer cutoff functionality.',
      technologies: ['Arduino', 'MQTT', 'ESP32', 'DC Voltage Sensor'],
      highlights: [
        'IoT device development',
        'Real-time voltage monitoring',
        'Series panel measurement',
        'Solar optimizer integration'
      ]
    },
    {
      id: 5,
      title: 'Other Projects',
      description: 'Additional projects demonstrating full-stack capabilities and diverse technology experience.',
      technologies: ['Laravel', 'Java', 'PHP', 'React'],
      highlights: [
        'Chat System - Real-time messaging',
        'Laravel CRUD - Full CRUD operations',
        'Student Union Portal - Community platform',
        'Pizza Hut System - Java-based management system'
      ]
    }
  ];

  return (
    <section id='projects'>
      <h2 className='projectsTitle'>Project Experience</h2>
      <p className='projectsDesc'>Building full-stack applications across various domains and technologies</p>
      
      <div className='projectsGrid'>
        {projects.map((project) => (
          <div key={project.id} className='projectCard'>
            <div className='projectHeader'>
              <h3>{project.title}</h3>
            </div>
            
            <p className='projectDescription'>{project.description}</p>
            
            <div className='highlights'>
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className='highlight'>
                  <span className='checkpoint'></span>
                  {highlight}
                </div>
              ))}
            </div>
            
            <div className='techStack'>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className='techTag'>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
