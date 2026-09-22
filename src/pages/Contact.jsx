import React, { useState } from 'react';
import './Pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    let whatsappMessage = `Contact Request:%0AName: ${formData.name}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    let whatsappURL = `https://wa.me/917976315557?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch for inquiries, quotes, or support. We're here to help.</p>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            
            <div className="contact-info">
              <h2 className="title-md" style={{ color: 'var(--text-main)', marginBottom: '1.5rem' }}>Reach Out Directly</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--primary-crimson)', marginBottom: '0.5rem', fontSize: '1.125rem' }}><i className="fa-solid fa-phone"></i> Phone</h3>
                <p style={{ color: 'var(--text-muted)' }}>+91 7976315557</p>
                <p style={{ color: 'var(--text-muted)' }}>+91 9876543210 (Alternate)</p>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--primary-crimson)', marginBottom: '0.5rem', fontSize: '1.125rem' }}><i className="fa-solid fa-envelope"></i> Email</h3>
                <p style={{ color: 'var(--text-muted)' }}>info@reliabledistributors.com</p>
                <p style={{ color: 'var(--text-muted)' }}>sales@reliabledistributors.com</p>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--primary-crimson)', marginBottom: '0.5rem', fontSize: '1.125rem' }}><i className="fa-solid fa-location-dot"></i> Address</h3>
                <p style={{ color: 'var(--text-muted)' }}>123 Safety Ave, Industrial Phase 1,<br />City, State, 123456</p>
              </div>
            </div>

            <div className="contact-form-wrapper glass-panel" style={{ padding: '2.5rem' }}>
              <h2 className="title-md" style={{ color: 'var(--text-main)', marginBottom: '1.5rem' }}>Send Us a Message</h2>
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <input type="text" name="name" className="input-field" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input type="tel" name="phone" className="input-field" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} style={{ flex: 1 }} />
                  <input type="email" name="email" className="input-field" placeholder="Email Address" value={formData.email} onChange={handleChange} style={{ flex: 1 }} />
                </div>
                <input type="text" name="subject" className="input-field" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                <textarea name="message" className="input-field" placeholder="Your Message" required value={formData.message} onChange={handleChange} style={{ minHeight: '150px', resize: 'vertical' }}></textarea>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>Send Message <i className="fa-solid fa-paper-plane"></i></button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
