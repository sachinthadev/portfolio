import React from 'react'
import './skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['ReactJS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'TailwindCSS', 'Bootstrap']
    },
    {
      category: 'Backend Development',
      skills: ['Laravel', 'PHP', 'Node.js', 'Express', 'Java', 'Python']
    },
    {
      category: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Cross-platform Development']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Firebase', 'SQLite', 'SQL']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Google Cloud', 'Linux', 'Docker', 'MQTT', 'Apache2', 'Navicat']
    },
    {
      category: 'Design & Multimedia',
      skills: ['Figma', 'Canva', 'Adobe Photoshop', 'UI/UX Design']
    },
    {
      category: 'Expertise',
      skills: ['Full-stack Development', 'IoT Systems', 'Database Management', 'OOP', 'Data Structures & Algorithms']
    },
    {
      category: 'Professional Skills',
      skills: ['Project Management', 'Team Leadership', 'Communication', 'Problem Solving', 'Quick Learner']
    }
  ];

  return (
   <section id='skills'>
        <h2 className='skillTitle'>Technical Expertise</h2>
        <p className='skillDesc'>Comprehensive skill set spanning full-stack development, cloud technologies, and modern frameworks</p>
        <div className='skillGrid'>
          {skillCategories.map((category, idx) => (
            <div key={idx} className='skillCategory'>
              <h3 className='categoryTitle'>{category.category}</h3>
              <div className='skillsList'>
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className='skillTag'>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
   </section>
  )
}

export default Skills
