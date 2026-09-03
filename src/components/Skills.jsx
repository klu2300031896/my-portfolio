import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const deviconClasses = {
    Java: 'devicon-java-plain colored',
    Python: 'devicon-python-plain colored',
    JavaScript: 'devicon-javascript-plain colored',
    HTML: 'devicon-html5-plain colored',
    CSS: 'devicon-css3-plain colored',
    'React.js': 'devicon-react-original colored',
    'Spring Boot': 'devicon-spring-plain colored',
    Django: 'devicon-django-plain colored',
    'REST APIs': 'devicon-fastapi-plain colored',
    MySQL: 'devicon-mysql-plain colored',
    MongoDB: 'devicon-mongodb-plain colored',
    Firebase: 'devicon-firebase-plain colored',
    AWS: 'devicon-amazonwebservices-plain-wordmark colored',
    Docker: 'devicon-docker-plain colored',
    'CI/CD': 'devicon-githubactions-plain colored',
    Vercel: 'devicon-vercel-original',
    Git: 'devicon-git-plain colored',
    GitHub: 'devicon-github-original',
    'VS Code': 'devicon-vscode-plain colored'
  };

  const aiIcons = {
    NLP: <><path d="M4 6h16v12H4z" /><path d="m8 10 2 2-2 2m5 0h3" /></>,
    'Sentence Transformers': <><path d="M6 7h12M6 12h12M6 17h12" /><circle cx="6" cy="7" r="1" /><circle cx="18" cy="12" r="1" /><circle cx="6" cy="17" r="1" /></>,
    'Machine Learning': <><path d="M12 4a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0V9a5 5 0 0 0-5-5Z" /><path d="M7 10H4m16 0h-3M9 15l-2 3m8-3 2 3M12 4V2" /></>
    ,
    'Generative AI': <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></>,
    'Prompt Engineering': <><path d="M5 5h14v10H9l-4 4V5Z" /><path d="m11 8-2 2 2 2m2 0h2" /></>
  };

  const renderSkillIcon = (skill) => {
    if (deviconClasses[skill]) return <i className={`skill-brand-icon ${deviconClasses[skill]}`} aria-hidden="true" />;
    if (aiIcons[skill]) return <svg className="skill-ai-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{aiIcons[skill]}</svg>;
    return <svg className="skill-ai-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></svg>;
  };

  // Simple mapping of categories to inline SVG icons for a rich design
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Programming Languages":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case "Frontend Development":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        );
      case "Backend & Databases":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
            <path d="M3 12A9 3 0 0 0 21 12"></path>
          </svg>
        );
      case "Cloud & DevOps":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
          </svg>
        );
      case "AI & Machine Learning":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        );
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
    }
  };

  return (
    <section id="skills" className="reveal">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Categorized skills and technologies I have worked with during my coursework and projects.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skills-category" style={{ '--stagger-index': index }}>
            <h3 className="skills-category-title">
              {getCategoryIcon(skillGroup.category)}
              {skillGroup.category}
            </h3>
            <div className="skills-list">
              {skillGroup.items.map((skill, sIndex) => (
                <span key={sIndex} className="skill-tag">
                  {renderSkillIcon(skill)}
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
