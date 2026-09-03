import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  // Render high-fidelity custom icon based on certification theme/issuer
  const getCertIcon = (cert) => {
    const theme = cert.theme || '';
    const issuer = cert.issuer || '';

    if (theme === 'aws' || issuer.includes('Amazon') || issuer.includes('AWS')) {
      return (
        <div className="cert-brand-icon-box cert-icon--aws">
          <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="aws-grad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9900" />
                <stop offset="1" stopColor="#FF5500" />
              </linearGradient>
            </defs>
            {/* Cloud Outline */}
            <path
              d="M33 26C34.66 26 36 24.66 36 23C36 21.48 34.88 20.21 33.4 20.03C32.96 16.63 30.04 14 26.5 14C23.67 14 21.23 15.68 20.18 18.1C19.64 17.86 19.04 17.72 18.4 17.72C16.25 17.72 14.5 19.47 14.5 21.62C14.5 21.82 14.52 22.01 14.55 22.2C13.06 22.6 12 23.96 12 25.59C12 27.58 13.62 29.2 15.61 29.2H32.5C34.43 29.2 36 27.63 36 25.7"
              stroke="url(#aws-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* AWS Smile Curve & Arrow */}
            <path
              d="M15 33.5C20.5 37 27.5 37 33 33.5"
              stroke="#FF9900"
              strokeWidth="2.3"
              strokeLinecap="round"
            />
            <path
              d="M31.2 32.2L33.8 33.8L32.2 36.2"
              stroke="#FF9900"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    }

    if (theme === 'automation' || issuer.includes('Automation')) {
      return (
        <div className="cert-brand-icon-box cert-icon--automation">
          <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="aa-grad" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF5A1F" />
                <stop offset="1" stopColor="#E11D48" />
              </linearGradient>
            </defs>
            {/* Intelligent Bot / Automation Node */}
            <rect x="12" y="18" width="24" height="18" rx="5" stroke="url(#aa-grad)" strokeWidth="2.4" />
            <circle cx="24" cy="11.5" r="3" stroke="url(#aa-grad)" strokeWidth="2.2" />
            <path d="M24 14.5V18" stroke="url(#aa-grad)" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="18" cy="25" r="2.2" fill="#FF5A1F" />
            <circle cx="30" cy="25" r="2.2" fill="#FF5A1F" />
            <path d="M19 30C21.5 32 26.5 32 29 30" stroke="url(#aa-grad)" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M8 26H12" stroke="url(#aa-grad)" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M36 26H40" stroke="url(#aa-grad)" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>
      );
    }

    if (theme === 'servicenow' || issuer.includes('ServiceNow')) {
      return (
        <div className="cert-brand-icon-box cert-icon--servicenow">
          <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="sn-grad" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10B981" />
                <stop offset="1" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            {/* Shield & Enterprise CMDB Architecture */}
            <path
              d="M24 10L36 15V24.5C36 31.8 30.9 38.2 24 40C17.1 38.2 12 31.8 12 24.5V15L24 10Z"
              stroke="url(#sn-grad)"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 24.5L22.5 28.5L29.5 20.5"
              stroke="url(#sn-grad)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    }

    return (
      <div className="cert-brand-icon-box cert-icon--default">
        <svg width="34" height="34" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="18" r="9" />
          <path d="M16 28L14 40L24 35L34 40L32 28" />
        </svg>
      </div>
    );
  };

  return (
    <section id="certifications" className="reveal">
      <div className="section-header">
        <div className="cert-section-eyebrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L15.09 5.09L19.45 4.55L20.55 8.91L23.64 12L20.55 15.09L19.45 19.45L15.09 18.91L12 22L8.91 18.91L4.55 19.45L3.45 15.09L0.36 12L3.45 8.91L4.55 4.55L8.91 5.09L12 2Z" />
          </svg>
          Credentials & Accreditations
        </div>
        <h2 className="section-title">Verified Certifications</h2>
        <p className="section-subtitle">
          Industry-recognized certifications validating technical proficiency in Cloud Architecture, Intelligent Process Automation, and Enterprise Data Infrastructure.
        </p>
      </div>

      <div className="certs-grid">
        {certifications.map((cert, index) => {
          const themeClass = cert.theme ? `cert-card--${cert.theme}` : 'cert-card--default';

          return (
            <div key={index} className={`cert-card ${themeClass}`} style={{ '--stagger-index': index }}>
              {/* Top ambient color glow */}
              <div className="cert-ambient-glow" aria-hidden="true"></div>

              <div className="cert-top">
                {/* Header Row: Icon + Verified Badge */}
                <div className="cert-header-row">
                  {getCertIcon(cert)}

                  {/* Verified Badge */}
                  <div className="cert-verified-badge" title="Authenticated Professional Credential">
                    <svg className="verified-seal-icon" width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2L14.7 4.7L18.5 4.2L19.5 8L23 10.7L21.3 14.2L22.8 18L19.2 19.3L17.5 22.8L13.7 22L12 25L10.3 22L6.5 22.8L4.8 19.3L1.2 18L2.7 14.2L1 10.7L4.5 8L5.5 4.2L9.3 4.7L12 2Z"
                        fill="currentColor"
                        fillOpacity="0.22"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.5 12L11 14.5L15.5 9.5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="verified-badge-label">Verified</span>
                    <span className="verified-pulse-dot"></span>
                  </div>
                </div>

                {/* Category Pill */}
                {cert.category && (
                  <div className="cert-category-badge">{cert.category}</div>
                )}

                {/* Title & Issuer */}
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer-wrap">
                  <span className="cert-issuer-label">Issued by:</span>
                  <span className="cert-issuer-name">{cert.issuer}</span>
                </div>

                {/* Date & Meta */}
                <div className="cert-meta-row">
                  <div className="cert-date-chip">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>{cert.date}</span>
                  </div>

                  <div className="cert-status-chip">
                    <span className="status-indicator-dot"></span>
                    <span>Active</span>
                  </div>
                </div>

                {/* Skills tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="cert-skills-tags">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="cert-skill-pill">{skill}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="cert-footer">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-action-btn"
                  aria-label={`View Certificate for ${cert.title}`}
                >
                  <span>Verify Credential</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

