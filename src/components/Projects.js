import React from 'react';
import { Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Attendance Management System',
      description: 'A comprehensive attendance tracking system with real-time updates, automated reports, and user-friendly dashboard for educational institutions.',
      technologies: ['Java Spring Boot', 'React', 'MySQL', 'REST APIs'],
      image: '📊',
      features: ['Real-time tracking', 'Automated reports', 'Dashboard analytics', 'User authentication'],
      
      github: '#'
    },
    {
      title: 'Institute Video Management',
      description: 'A video management platform for educational institutions with video upload, categorization, streaming, and advanced search capabilities.',
      technologies: ['Python Django', 'React', 'MySQL', 'Video streaming'],
      image: '🎥',
      features: ['Video upload & streaming', 'Categories & tags', 'Search functionality', 'User management'],
      
      github: '#'
    },
    {
      title: 'API Creator (MockAPI)',
      description: 'A powerful tool to create mock APIs quickly without backend knowledge. Generate JSON endpoints, manage data, and test integrations seamlessly.',
      technologies: ['Java Spring Boot', 'React', 'MySQL', 'JSON processing'],
      image: '⚙️',
      features: ['Quick API generation', 'JSON endpoint management', 'Data storage', 'API testing tools'],
      
      github: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="project-header">
                <div className="project-icon">{project.image}</div>
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                
                <a href={project.github} className="project-link" title="GitHub">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="more-projects fade-in-up" style={{ marginTop: '3rem' }}>
          <p>Browse more of my work on GitHub</p>
          <a href="https://github.com/rajr2005" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
