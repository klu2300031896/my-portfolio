import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const canvasRef = useRef(null);
  const [photoUnavailable, setPhotoUnavailable] = useState(false);
  const { github, linkedin, email, fullName } = portfolioData.personalInfo;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < Math.min(particleCount, 80); i++) {
        particles.push(new Particle());
      }
    };
    
    initParticles();
    
    const drawLines = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dist = Math.hypot(particles[a].x - particles[b].x, particles[a].y - particles[b].y);
          if (dist < 100) {
            const alpha = (100 - dist) / 100 * 0.15;
            ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-sec" style={{ position: 'relative' }}>
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-content">
          <div className="hero-details hero-entrance">
            <div className="hero-tagline">Computer Science Engineering Student</div>
            <h1 className="hero-name">Hi, I'm {fullName}</h1>
            <div className="hero-title">Full-Stack Developer <span>|</span> Problem Solver <span>|</span> Tech Enthusiast</div>
        
            <p className="hero-desc">
              I build practical web applications and intelligent systems with modern technologies, focusing on clean, user-focused digital experiences.
            </p>
        
            <div className="hero-ctas">
          <button className="btn btn-primary" onClick={scrollToProjects}>
            View Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path></svg>
          </a>
            </div>
        
            <div className="hero-socials">
          <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href={`mailto:${email}`} className="social-icon" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
            </div>
          </div>

          {/* Profile Photo with Floating Badges */}
          <div className="hero-photo-area hero-profile-entrance">
            <div className="hero-profile-frame">
              {photoUnavailable ? (
                <div className="hero-photo-placeholder" aria-label="Profile photo placeholder">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></svg>
                  <span>Replace with photo</span>
                </div>
              ) : (
                <img
                  src="/profile.jpg"
                  alt="Rudru Venkatesh - Computer Science Engineering Student"
                  className="hero-profile-image"
                  onError={() => setPhotoUnavailable(true)}
                />
              )}
            </div>

            {/* Floating Badge: Open to Work — top right */}
            <div className="hero-float-badge hero-float-badge--otw">
              <span className="hero-otw-dot"></span>
              🚀 Open to work
            </div>

            {/* Floating Badge: CGPA — bottom left */}
            <div className="hero-float-badge hero-float-badge--cgpa">
              <span className="hero-float-value">8</span>
              <span className="hero-float-label">CGPA</span>
            </div>

            {/* Floating Badge: Projects — bottom right */}
            <div className="hero-float-badge hero-float-badge--projects">
              <span className="hero-float-value hero-float-value--green">3+</span>
              <span className="hero-float-label">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
