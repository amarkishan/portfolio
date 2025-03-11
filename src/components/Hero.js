import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm Amar Vaka<br />
              I create <span style={{ color: 'var(--primary-color)' }}>Full Stack Developer</span>
            </h1>
            <p>Building Scalable, High-Performance Solutions with 8+ Years of Experience</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          {/* <div className="hero-image">
            <img src="/api/placeholder/400/320" alt="Amar Vaka professional photo" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;