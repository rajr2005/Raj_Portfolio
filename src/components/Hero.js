import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Raj R</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer | Java Spring Boot | Python Django | React</p>
          <p className="hero-description">
            Building elegant solutions with modern technologies. Passionate about creating seamless user experiences and robust backend systems.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/rajr2005" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/r-raj-620638298?" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:infotechraj2005@gmail.com" className="social-icon" title="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-visual slide-in-right">
          <div className="code-card">
            <div className="code-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
            </div>
            <pre className="code-content">{`const developer = {
  name: "Raj R",
  location: "Madurai",
  skills: [
    "Java Spring Boot",
    "Python Django",
    "React",
    "MySQL"
  ],
  expertise: "Full Stack"
}`}</pre>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
