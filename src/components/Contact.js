import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Connect with me to discuss opportunities or collaborations</p>
        </div>
        <div className="contact-content">
          <center>
            <div className="contact-icons">
                <a href="mailto:amar.vaka@example.com" aria-label="Email Amar Vaka" className="contact-icon">
                    <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/amarvaka" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="contact-icon">
                   <FaLinkedin />
                </a>
                <a href="https://github.com/amarvaka" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="contact-icon">
                  <FaGithub />
                </a>
                  {/* <div className="contact-icon" aria-label="Location">
                            📍
                 </div> */}
            </div>
         </center>  
          
        </div>
      </div>
    </section>
  );
};

export default Contact;