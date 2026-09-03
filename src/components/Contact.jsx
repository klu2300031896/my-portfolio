import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email, phone, location, github, linkedin } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('loading');
    
    // Simulate API request submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="reveal">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project, collaboration idea, or question? Send a message and let's start a conversation.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info contact-reveal-info">
          <div>
            <p className="availability-status"><span aria-hidden="true" />Currently available for opportunities</p>
            <h3 className="contact-info-title">Reach Out Directly</h3>
            <p className="contact-info-desc">
              Feel free to use the contact form or send an email. I usually respond within 24 hours.
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="contact-item-content">
                <span className="contact-item-label">Email</span>
                <a href={`mailto:${email}`} className="contact-item-value">{email}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              </div>
              <div className="contact-item-content">
                <span className="contact-item-label">Professional Links</span>
                <span className="contact-item-value"><a href={github} target="_blank" rel="noopener noreferrer">GitHub</a> · <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="contact-item-content">
                <span className="contact-item-label">Phone</span>
                <a href={`tel:${phone}`} className="contact-item-value">{phone}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="contact-item-content">
                <span className="contact-item-label">Location</span>
                <span className="contact-item-value">{location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container contact-reveal-form">
          {status === 'success' && (
            <div className="form-feedback success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                <strong>Thank you!</strong> Your message has been sent successfully. I will get back to you soon.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your name"
                disabled={status === 'loading'}
              />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="you@example.com"
                disabled={status === 'loading'}
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="Project discussion or collaboration idea..."
                disabled={status === 'loading'}
              />
              {errors.subject && <div className="form-error">{errors.subject}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                placeholder="Write your message here..."
                disabled={status === 'loading'}
              ></textarea>
              {errors.message && <div className="form-error">{errors.message}</div>}
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? <><span className="button-spinner" aria-hidden="true" />Sending Message...</> : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
