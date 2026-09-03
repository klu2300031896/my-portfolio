import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { educationTimeline } = portfolioData;

  const getNodeIcon = (type) => {
    if (type === 'college') {
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          {/* Mortarboard skull cap */}
          <path d="M9.5 16C9.5 16 10 21 16 21C22 21 22.5 16 22.5 16V14.5L16 17.5L9.5 14.5V16Z" fill="#1e1b4b" />
          <path d="M10.5 16.5C11.2 19 13.5 20.2 16 20.2C18.5 20.2 20.8 19 21.5 16.5" stroke="#3730a3" strokeWidth="1" />
          {/* Top Diamond */}
          <path d="M16 6L28.5 11.8L16 17.5L3.5 11.8L16 6Z" fill="#312e81" />
          <path d="M16 6L28.5 11.8L16 13.2L3.5 11.8L16 6Z" fill="#4338ca" />
          <path d="M16 17.5L28.5 11.8L28 12.8L16 18.5L4 12.8L3.5 11.8L16 17.5Z" fill="#1e1b4b" />
          {/* Center Button */}
          <ellipse cx="16" cy="11.8" rx="1.5" ry="1.2" fill="#f59e0b" />
          {/* Tassel */}
          <path d="M16 11.8C18 12.5 21.5 14 22 15.5C22.5 17 22.5 19.5 22.5 21.5" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="22.5" cy="22" r="1.5" fill="#d97706" />
        </svg>
      );
    }
    if (type === 'intermediate') {
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          {/* Cyan/Blue book (Bottom Left) */}
          <rect x="5" y="10" width="13" height="17" rx="2" transform="rotate(-18 5 10)" fill="#0284c7" />
          <rect x="7" y="11" width="9.5" height="15" rx="1.5" transform="rotate(-18 7 11)" fill="#38bdf8" />
          {/* Green book (Middle) */}
          <rect x="9.5" y="8" width="13" height="17" rx="2" transform="rotate(4 9.5 8)" fill="#059669" />
          <rect x="11.5" y="9" width="9.5" height="15" rx="1.5" transform="rotate(4 11.5 9)" fill="#34d399" />
          {/* Red/Coral book (Top Right) */}
          <rect x="14" y="9" width="13" height="17" rx="2" transform="rotate(22 14 9)" fill="#e11d48" />
          <rect x="16" y="10" width="9.5" height="15" rx="1.5" transform="rotate(22 16 10)" fill="#fb7185" />
          <line x1="17.5" y1="12.5" x2="23" y2="14.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    }
    return (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        {/* School Building Base (Warm Orange/Terracotta) */}
        <rect x="6" y="13.5" width="20" height="13.5" rx="1.5" fill="#ea580c" />
        <rect x="7" y="14.5" width="18" height="11.5" rx="1" fill="#f97316" />
        {/* Main Triangular Roof (Sky Blue) */}
        <path d="M16 6L23.5 13.5H8.5L16 6Z" fill="#0284c7" />
        <path d="M16 7.5L22 13H10L16 7.5Z" fill="#38bdf8" />
        {/* Bell Tower & Flag */}
        <rect x="14" y="2.5" width="4" height="4" rx="0.5" fill="#f1f5f9" />
        <path d="M16 0.5L18.5 2.5H13.5L16 0.5Z" fill="#e11d48" />
        <circle cx="16" cy="4.5" r="1.1" fill="#f59e0b" />
        {/* Arched Main Door */}
        <rect x="13.5" y="20" width="5" height="7" rx="1" fill="#1e293b" />
        <path d="M13.5 22C13.5 20.5 14.5 19.5 16 19.5C17.5 19.5 18.5 20.5 18.5 22V27H13.5V22Z" fill="#475569" />
        {/* Windows */}
        <rect x="8.5" y="16.5" width="3.2" height="3.2" rx="0.6" fill="#e0f2fe" />
        <rect x="20.3" y="16.5" width="3.2" height="3.2" rx="0.6" fill="#e0f2fe" />
      </svg>
    );
  };

  return (
    <section id="education" className="reveal">
      <div className="section-header">
        <div className="edu-section-eyebrow">
          <span className="edu-eyebrow-line"></span>
          ACADEMIC BACKGROUND
        </div>
        <h2 className="section-title edu-gradient-title">Education</h2>
        <p className="section-subtitle">
          My academic journey and the institutions that shaped my technical foundation.
        </p>
      </div>

      <div className="edu-timeline-container">
        {educationTimeline && educationTimeline.map((item, index) => (
          <div key={index} className={`edu-timeline-item edu-theme--${item.theme}`} style={{ '--stagger-index': index }}>
            {/* Timeline Node Column */}
            <div className="edu-node-wrapper">
              <div className="edu-node-icon-box">
                {getNodeIcon(item.type)}
              </div>
              {index < educationTimeline.length - 1 && <div className="edu-vertical-connector"></div>}
            </div>

            {/* Content Card */}
            <div className="edu-content-card">
              <div className="edu-card-top-row">
                <h3 className="edu-card-title">{item.title}</h3>
                <span className="edu-period-chip">{item.period}</span>
              </div>

              <div className="edu-card-bottom-row">
                <div className="edu-institution-info">
                  <span className="edu-institution-name">{item.institution}</span>
                  {item.board && (
                    <span className="edu-board-chip">{item.board}</span>
                  )}
                </div>

                <div className="edu-score-pill">
                  {item.score}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
