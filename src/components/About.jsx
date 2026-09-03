import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { aboutMe, quickInfo } = portfolioData.personalInfo;

  return (
    <section id="about" className="reveal">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A brief overview of my background, interests, and engineering journey.</p>
      </div>

      <div className="about-grid">
        <div className="about-text about-copy">
          {aboutMe.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p style={{ marginTop: '10px' }}>
            I enjoy building clean, robust backend APIs, matching them with interactive frontend interfaces, and incorporating data-driven predictive modules. I'm actively seeking opportunities to apply my technical skillset to real-world software and collaboration.
          </p>
        </div>

        <div className="about-table-container about-profile-card">
          <table className="about-table">
            <tbody>
              {quickInfo.map((info, index) => (
                <tr key={index}>
                  <td className="label">{info.label}</td>
                  <td className="value">{info.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
