import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="resume-section reveal">
      <div className="resume-card">
        <div>
          <p className="resume-eyebrow">Open to opportunities</p>
          <h2>Let’s build something meaningful.</h2>
          <p>Explore my experience, skills, and project work in one concise resume.</p>
        </div>
        <div className="resume-actions">
        <a href="/resume.pdf" download="Rudru_Venkatesh_Resume.pdf" className="btn btn-primary">
          Download Resume
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Resume</a>
        </div>
      </div>
    </section>
  );
}
