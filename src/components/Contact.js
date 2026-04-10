import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info fade-in-up">
            <p className="contact-intro">
              I'm always open to new opportunities and interesting projects. Feel free to reach out!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <Mail size={24} className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:infotechraj2005@gmail.com">infotechraj2005@gmail.com</a>
                </div>
              </div>

              <div className="contact-method">
                <Phone size={24} className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+917092967550">+91 7092967550</a>
                </div>
              </div>

              <div className="contact-method">
                <MapPin size={24} className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Madurai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>Connect With Me</h4>
              <div className="social-links-large">
                <a href="https://github.com/rajr2005" target="_blank" rel="noopener noreferrer" className="social-link-large">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/r-raj-620638298?" target="_blank" rel="noopener noreferrer" className="social-link-large">
                  LinkedIn
                </a>
                
              </div>
            </div>
          </div>

          <form className="contact-form slide-in-right" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Thanks for your message! I'll get back to you soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-submit">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
