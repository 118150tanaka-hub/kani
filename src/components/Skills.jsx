import React from 'react';

const SkillItem = ({ name, level }) => {
  const dots = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`skill-dot ${i < level ? 'active' : ''}`}></span>
  ));

  return (
    <li className="skill-item">
      <span className="skill-name">{name}</span>
      <span className="skill-meter">{dots}</span>
    </li>
  );
};

const Skills = () => {
  const skills = [
    { name: 'Maya', level: 4 },
    { name: 'Substance Painter', level: 3 },
    { name: 'Photoshop', level: 5 },
    { name: 'Clip Studio Paint', level: 4 },
    { name: 'Procreate', level: 3 }
  ];

  return (
    <div className="container">
      <section className="section">
        <h3>Skills</h3>
        <ul className="skill-list">
          {skills.map(skill => (
            <SkillItem key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Skills;