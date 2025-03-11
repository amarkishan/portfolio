import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p> Amar Vaka :Full Stack Developer</p>
            <p>I am a Full Stack Developer with 8+ years of experience in designing and developing scalable, high-performance applications. My expertise spans Java, Spring Boot microservices, and front-end technologies like ReactJS, enabling me to build end-to-end solutions that are efficient, secure, and user-friendly. I have a strong background in cloud technologies (AWS, Azure), CI/CD pipelines, and DevOps tools like Docker and Kubernetes, ensuring seamless deployment and scalability.</p>
            <p>With a deep understanding of microservices architecture, messaging systems (Kafka, RabbitMQ), and database management (SQL & NoSQL), I have successfully optimized data pipelines, enhanced system reliability, and contributed to enterprise-grade solutions in industries like healthcare, retail, and finance. I am passionate about leveraging modern technologies to solve complex problems and continuously improving application performance and user experience.</p>
            <a href="#" className="btn">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
