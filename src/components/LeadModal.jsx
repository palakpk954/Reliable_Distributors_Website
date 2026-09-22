import React, { useState, useEffect } from 'react';
import './LeadModal.css';

const LeadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    // Only show once per session
    const hasSeenModal = sessionStorage.getItem('hasSeenLeadModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000); // Show after 3 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenLeadModal', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Free Consultation Request:%0A- Name: ${formData.name}%0A- Email: ${formData.email}%0A- Phone: ${formData.phone}`;
    window.open(`https://wa.me/917976315557?text=${msg}`, "_blank");
    handleClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content animate-fade-up">
        <button className="modal-close" onClick={handleClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="modal-banner">
          <img src="/images/mascot.jpg" alt="Firefighter Mascot" className="modal-mascot" />
          <h2>Get a Free Fire Safety Consultation!</h2>
        </div>
        <p>Leave your details below and our experts will reach out to ensure your premises are 100% compliant and safe.</p>
        <form onSubmit={handleSubmit} className="modal-form">
          <input type="text" name="name" placeholder="Your Name" required className="input-field" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required className="input-field" value={formData.email} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Your Phone Number" required className="input-field" value={formData.phone} onChange={handleChange} />
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            Claim Free Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadModal;
