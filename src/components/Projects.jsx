import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Full Stack', 'Web Development', 'Machine Learning', 'AI / NLP', 'Cloud'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter));

  // Renders a high-fidelity SVG illustration for each project to serve as the mockup screenshot
  const renderProjectMockup = (projectId) => {
    switch (projectId) {
      case 'car-rental':
        return (
          <svg viewBox="0 0 400 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect width="400" height="200" fill="url(#dbGrad)" />
            {/* Browser Header */}
            <rect width="400" height="25" fill="#1e293b" opacity="0.8" />
            <circle cx="15" cy="12.5" r="4" fill="#ef4444" />
            <circle cx="27" cy="12.5" r="4" fill="#f59e0b" />
            <circle cx="39" cy="12.5" r="4" fill="#10b981" />
            <rect x="60" y="6" width="280" height="13" rx="4" fill="#0f172a" opacity="0.6" />
            {/* Mock Dashboard Content */}
            <rect x="20" y="45" width="110" height="135" rx="6" fill="#1e293b" stroke="rgba(124, 58, 237, 0.3)" />
            <text x="30" y="65" fill="#7c3aed" fontSize="10" fontWeight="bold">VEHICLES</text>
            <rect x="30" y="80" width="90" height="8" rx="2" fill="#06b6d4" opacity="0.6" />
            <rect x="30" y="95" width="70" height="8" rx="2" fill="#94a3b8" opacity="0.3" />
            <rect x="30" y="110" width="80" height="8" rx="2" fill="#94a3b8" opacity="0.3" />
            
            <rect x="150" y="45" width="230" height="60" rx="6" fill="#1e293b" stroke="rgba(6, 182, 212, 0.3)" />
            <text x="160" y="62" fill="#06b6d4" fontSize="10" fontWeight="bold">BOOKING STATS</text>
            <path d="M 160 95 Q 210 65 260 85 T 360 60" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
            <circle cx="360" cy="60" r="3.5" fill="#06b6d4" />
            
            <rect x="150" y="115" width="230" height="65" rx="6" fill="#1e293b" opacity="0.7" />
            <text x="160" y="132" fill="#f8fafc" fontSize="10" fontWeight="600">Active Bookings</text>
            <rect x="160" y="145" width="210" height="12" rx="3" fill="#10b981" opacity="0.2" />
            <circle cx="170" cy="151" r="3" fill="#10b981" />
            <rect x="180" y="148" width="160" height="6" rx="2" fill="#10b981" opacity="0.8" />
          </svg>
        );
      case 'plant-disease':
        return (
          <svg viewBox="0 0 400 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="plantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#022c22" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect width="400" height="200" fill="url(#plantGrad)" />
            {/* Browser Header */}
            <rect width="400" height="25" fill="#0f2f25" opacity="0.8" />
            <circle cx="15" cy="12.5" r="4" fill="#ef4444" />
            <circle cx="27" cy="12.5" r="4" fill="#f59e0b" />
            <circle cx="39" cy="12.5" r="4" fill="#10b981" />
            {/* Mock Analysis Output */}
            <rect x="25" y="45" width="140" height="135" rx="8" fill="#064e3b" stroke="rgba(16, 185, 129, 0.4)" />
            {/* Leaf Shape SVG */}
            <path d="M 95 65 C 130 90 120 145 95 155 C 70 145 60 90 95 65 Z" fill="#10b981" opacity="0.8" />
            <path d="M 95 65 L 95 155" stroke="#064e3b" strokeWidth="1.5" />
            <path d="M 95 90 Q 110 95 115 105" fill="none" stroke="#064e3b" strokeWidth="1" />
            <path d="M 95 110 Q 75 115 75 125" fill="none" stroke="#064e3b" strokeWidth="1" />
            {/* Infected Spot Indicator */}
            <circle cx="85" cy="115" r="5" fill="#f59e0b" opacity="0.9" />
            <circle cx="105" cy="100" r="4" fill="#f59e0b" opacity="0.9" />

            <rect x="185" y="45" width="190" height="135" rx="8" fill="#0f172a" stroke="rgba(16, 185, 129, 0.3)" />
            <text x="200" y="65" fill="#10b981" fontSize="12" fontWeight="bold">DIAGNOSIS REPORT</text>
            <text x="200" y="85" fill="#94a3b8" fontSize="10">Target: Plant Leaf</text>
            <text x="200" y="105" fill="#f59e0b" fontSize="11" fontWeight="bold">Status: Rust Disease</text>
            <text x="200" y="125" fill="#f8fafc" fontSize="10">Confidence Score:</text>
            <rect x="200" y="135" width="160" height="12" rx="4" fill="#1e293b" />
            <rect x="200" y="135" width="148" height="12" rx="4" fill="linear-gradient(90deg, #10b981, #f59e0b)" />
            <text x="315" y="144" fill="#f8fafc" fontSize="8.5" fontWeight="bold">92.5%</text>
          </svg>
        );
      case 'citizen-chatbot':
        return (
          <svg viewBox="0 0 400 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="chatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1e38" />
                <stop offset="100%" stopColor="#080711" />
              </linearGradient>
            </defs>
            <rect width="400" height="200" fill="url(#chatGrad)" />
            {/* Header */}
            <rect width="400" height="25" fill="#111125" opacity="0.8" />
            <circle cx="15" cy="12.5" r="4" fill="#ef4444" />
            <circle cx="27" cy="12.5" r="4" fill="#f59e0b" />
            <circle cx="39" cy="12.5" r="4" fill="#10b981" />
            {/* Chat Area */}
            <rect x="20" y="40" width="220" height="25" rx="12.5" fill="#1e293b" opacity="0.8" />
            <circle cx="35" cy="52.5" r="8" fill="#7c3aed" />
            <text x="32" y="56" fill="#f8fafc" fontSize="9" fontWeight="bold">U</text>
            <text x="50" y="55" fill="#e2e8f0" fontSize="9">Upload PDF document...</text>
            <rect x="250" y="43" width="40" height="18" rx="4" fill="#10b981" opacity="0.3" />
            <text x="256" y="55" fill="#10b981" fontSize="8" fontWeight="bold">doc.pdf</text>

            {/* Chatbot Response */}
            <rect x="70" y="75" width="310" height="60" rx="12" fill="#0f172a" stroke="rgba(124, 58, 237, 0.4)" />
            <circle cx="85" cy="95" r="8" fill="#06b6d4" />
            <text x="82" y="98" fill="#030014" fontSize="9" fontWeight="bold">AI</text>
            <text x="100" y="93" fill="#06b6d4" fontSize="9" fontWeight="bold">BOT RESPONSE (MULTILINGUAL)</text>
            <text x="100" y="108" fill="#94a3b8" fontSize="8.5">"El documento detalla las regulaciones..."</text>
            <text x="100" y="122" fill="#94a3b8" fontSize="8.5">Translation: "The document outlines citizen rules..."</text>

            {/* Semantic Search Vector Visualizer */}
            <rect x="20" y="145" width="360" height="42" rx="6" fill="#18182b" stroke="rgba(6, 182, 212, 0.2)" />
            <text x="30" y="158" fill="#f8fafc" fontSize="8" fontWeight="bold">SEMANTIC SEARCH PIPELINE</text>
            <line x1="140" y1="165" x2="260" y2="165" stroke="#94a3b8" strokeDasharray="3,3" />
            <rect x="145" y="157" width="45" height="16" rx="3" fill="#7c3aed" opacity="0.8" />
            <text x="149" y="168" fill="#f8fafc" fontSize="8">Embedding</text>
            <rect x="215" y="157" width="35" height="16" rx="3" fill="#06b6d4" opacity="0.8" />
            <text x="221" y="168" fill="#f8fafc" fontSize="8">Cosine</text>
          </svg>
        );
      case 'carhub-checker':
        return (
          <svg viewBox="0 0 400 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="db2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0b1329" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
            </defs>
            <rect width="400" height="200" fill="url(#db2Grad)" />
            {/* Header */}
            <rect width="400" height="25" fill="#0f172a" opacity="0.8" />
            <circle cx="15" cy="12.5" r="4" fill="#ef4444" />
            <circle cx="27" cy="12.5" r="4" fill="#f59e0b" />
            <circle cx="39" cy="12.5" r="4" fill="#10b981" />
            
            {/* Calendar Table Mock */}
            <rect x="20" y="45" width="200" height="135" rx="8" fill="#1e293b" stroke="rgba(6, 182, 212, 0.3)" />
            <text x="32" y="62" fill="#f8fafc" fontSize="10" fontWeight="bold">Availability Calendar</text>
            <line x1="30" y1="72" x2="210" y2="72" stroke="#94a3b8" opacity="0.2" />
            {/* Small Calendar Grid */}
            {Array.from({ length: 4 }).map((_, rIndex) => (
              Array.from({ length: 5 }).map((_, cIndex) => {
                const isBooked = (rIndex + cIndex) % 3 === 0;
                return (
                  <rect
                    key={`${rIndex}-${cIndex}`}
                    x={35 + cIndex * 34}
                    y={82 + rIndex * 22}
                    width="26"
                    height="16"
                    rx="3"
                    fill={isBooked ? '#ef4444' : '#10b981'}
                    opacity={isBooked ? 0.8 : 0.6}
                  />
                )
              })
            ))}

            {/* Firebase Live Database Listener Mock */}
            <rect x="235" y="45" width="145" height="135" rx="8" fill="#0f172a" stroke="rgba(124, 58, 237, 0.3)" />
            <text x="245" y="62" fill="#e2e8f0" fontSize="9" fontWeight="bold">Real-time Stream</text>
            <rect x="245" y="75" width="125" height="26" rx="4" fill="#0b1329" />
            <text x="250" y="87" fill="#f59e0b" fontSize="8" fontWeight="bold">FIREBASE EVENT</text>
            <text x="250" y="97" fill="#10b981" fontSize="7.5">Car SUV-405 booked</text>
            
            <rect x="245" y="110" width="125" height="26" rx="4" fill="#0b1329" />
            <text x="250" y="122" fill="#06b6d4" fontSize="8" fontWeight="bold">SYNC COMPLETED</text>
            <text x="250" y="132" fill="#94a3b8" fontSize="7.5">Vercel Edge latency: 12ms</text>
          </svg>
        );
      case 'carhub-portfolio':
        return (
          <svg viewBox="0 0 400 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="galGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1c0b30" />
                <stop offset="100%" stopColor="#080312" />
              </linearGradient>
            </defs>
            <rect width="400" height="200" fill="url(#galGrad)" />
            {/* Header */}
            <rect width="400" height="25" fill="#120624" opacity="0.8" />
            <circle cx="15" cy="12.5" r="4" fill="#ef4444" />
            <circle cx="27" cy="12.5" r="4" fill="#f59e0b" />
            <circle cx="39" cy="12.5" r="4" fill="#10b981" />
            
            {/* Gallery layouts */}
            <rect x="20" y="45" width="170" height="135" rx="8" fill="#1a142c" stroke="rgba(124, 58, 237, 0.4)" />
            <text x="32" y="65" fill="#f8fafc" fontSize="11" fontWeight="bold">DJ CarHub Showcase</text>
            <rect x="32" y="78" width="146" height="50" rx="4" fill="#2d1a4a" />
            {/* Mock Car Outline sketch */}
            <path d="M 45 115 L 60 102 L 110 102 L 130 115 Z" fill="none" stroke="#06b6d4" strokeWidth="2" />
            <circle cx="65" cy="118" r="6" fill="#7c3aed" />
            <circle cx="110" cy="118" r="6" fill="#7c3aed" />
            <text x="32" y="145" fill="#94a3b8" fontSize="8">Luxury Fleet Showcase</text>
            <text x="32" y="157" fill="#06b6d4" fontSize="8" fontWeight="600">★★★★★ rated service</text>

            <rect x="205" y="45" width="175" height="135" rx="8" fill="#100b21" stroke="rgba(6, 182, 212, 0.3)" />
            <text x="215" y="62" fill="#7c3aed" fontSize="9" fontWeight="bold">RESPONSIVE VIEWPORTS</text>
            
            {/* Mini phone frame */}
            <rect x="215" y="75" width="45" height="90" rx="6" fill="#1b1236" stroke="#94a3b8" strokeWidth="1" />
            <rect x="220" y="82" width="35" height="70" rx="3" fill="#0c071d" />
            <rect x="223" y="88" width="29" height="12" fill="#7c3aed" opacity="0.6" />
            
            {/* Mini tablet frame */}
            <rect x="275" y="85" width="90" height="70" rx="6" fill="#1b1236" stroke="#94a3b8" strokeWidth="1" />
            <rect x="280" y="90" width="80" height="58" rx="3" fill="#0c071d" />
            <rect x="285" y="96" width="30" height="15" fill="#06b6d4" opacity="0.6" />
            <rect x="320" y="96" width="35" height="15" fill="#7c3aed" opacity="0.6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="reveal">
      <div className="section-header">
        <h2 className="section-title">Academic & Software Projects</h2>
        <p className="section-subtitle">A collection of systems I've built demonstrating full-stack engineering, databases, machine learning, and responsive design.</p>
      </div>

      <div className="projects-filter-bar">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={`${activeFilter}-${project.id}`} className="project-card project-card-enter" style={{ '--stagger-index': index }}>
            <div className="project-img-wrapper">
              {project.image ? (
                <img src={project.image} alt={`${project.title} project preview`} className="project-preview-image" />
              ) : renderProjectMockup(project.id)}
            </div>
            
            <div className="project-content">
              <div className="project-tags">
                {project.tags.slice(0, 3).map((tag, tIdx) => (
                  <span key={tIdx} className={`project-tag ${tIdx % 2 === 0 ? '' : 'secondary'}`}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-features">
                <h4 className="project-features-title">Key Features</h4>
                <ul className="project-features-list">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {(project.demoLink || project.githubLink) && (
                <div className="project-links">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link-btn primary">
                      Live Demo
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-btn secondary">
                      GitHub
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
