import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend',
      skills: [
        { name: 'Java Spring Boot', level: 90 },
        { name: 'Python Django', level: 88 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'Microservices', level: 80 }
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'HTML/CSS', level: 93 },
        { name: 'Responsive Design', level: 91 }
      ]
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 88 },
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Maven/Gradle', level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stack fade-in-up" style={{ marginTop: '4rem' }}>
          <h3>Technology Stack</h3>
          <div className="tech-tags">
            <span className="tech-tag">Java</span>
            <span className="tech-tag">Spring Boot</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Django</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">HTML5</span>
            <span className="tech-tag">CSS3</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">Git</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">REST APIs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
