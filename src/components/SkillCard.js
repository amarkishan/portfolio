import React from 'react';
import './SkillCard.css';

const SkillCard = ({ skill }) => {
  const { title, description, icon } = skill;
  
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;