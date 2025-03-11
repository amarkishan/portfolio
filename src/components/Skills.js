import React from 'react';
import './Skills.css';
import SkillCard from './SkillCard.js';

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'Expertise in Java, Spring Boot microservices, and ReactJS to build scalable, end-to-end applications.',
      icon: '💻'
    },
    {
      id: 2,
      title: 'Cloud Technologies',
      description: 'Proficient in AWS and Azure for deploying and managing high-performance applications.',
      icon: '☁️'
    },
    {
      id: 3,
      title: 'DevOps & CI/CD',
      description: 'Skilled in CI/CD pipelines, Docker, and Kubernetes for seamless deployment and scalability.',
      icon: '⚙️'
    },
    {
      id: 4,
      title: 'Microservices & Messaging',
      description: 'Deep knowledge of microservices architecture and messaging systems like Kafka and RabbitMQ.',
      icon: '📡'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>My Skills</h2>
          <p>Here's what I bring to the table</p>
        </div>
        <div className="skills-grid">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;