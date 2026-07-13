import React from 'react';
import { Award, MapPin, Phone, Mail } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>

        <div className="about-content">
          <div className="about-text fade-in-up">
            <p>
              I'm a passionate <strong>Full Stack Developer</strong> from Madurai with expertise in building scalable web applications. I completed my BSc IT degree from Ultra Arts and Science College in 2025 and have since developed a strong foundation in modern web technologies.
            </p>

            <p>
              With hands-on experience in <strong>Java Spring Boot</strong>, <strong>Python Django</strong>, <strong>Data Analytics</strong> and <strong>React</strong>, I enjoy translating complex requirements into elegant, user-friendly solutions. My projects demonstrate my ability to work across the full development stack, from database design to responsive UI.
            </p>

            <p>
              I'm driven by a passion for clean code, continuous learning, and delivering value through technology. When I'm not coding, I'm exploring new technologies and best practices in the software development world.
            </p>
          </div>

          <div className="about-info slide-in-right">
            <div className="info-card">
              <Award size={32} className="info-icon" />
              <h3>Education</h3>
              <p>BSc IT</p>
              <small>Ultra Arts and Science College, 2025</small>
            </div>

            <div className="info-card">
              <MapPin size={32} className="info-icon" />
              <h3>Location</h3>
              <p>Madurai, Tamil Nadu</p>
              <small>India</small>
            </div>

            <div className="info-card">
              <Phone size={32} className="info-icon" />
              <h3>Phone</h3>
              <p>+91 7092967550</p>
              <small>Available for freelance</small>
            </div>

            <div className="info-card">
              <Mail size={32} className="info-icon" />
              <h3>Email</h3>
              <p>infotechraj2005@gmail.com</p>
              <small>Let's connect!</small>
            </div>

            <div className="info-card">
              <Award size={32} className="info-icon" />
              <h3>Experience</h3>
              <p>Software Developer</p>
              <small>May 2025 – June 2026</small>
              <div style={{ marginTop: '0.75rem', textAlign: 'left' }}>
                <ul style={{ paddingLeft: '1.1rem', margin: 0, color: '#667eea', fontWeight: 600 }}>
                  <li>Java, Spring Boot</li>
                  <li>Python, Django</li>
                  <li>React</li>
                  <li>C, C++</li>
                  <li>MySQL</li>
                  <li>Power BI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
