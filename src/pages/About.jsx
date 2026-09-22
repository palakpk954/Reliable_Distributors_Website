import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Learn more about Reliable Distributors and our commitment to your safety.</p>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="about-container" style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="about-text" style={{ flex: '1 1 500px' }}>
              <h2 className="title-lg" style={{ color: 'var(--primary-crimson)', marginBottom: '1.5rem' }}>Who We Are</h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                Reliable Distributors is a leading provider of fire safety equipment and services. With years of experience in the industry, we have built a reputation for excellence, reliability, and professionalism.
              </p>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                Our team of certified technicians is dedicated to ensuring that your premises are equipped with the highest quality fire protection systems.
              </p>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem' }}>Our Core Values</h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--primary-crimson)' }}></i> Quality and Certification</li>
                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--primary-crimson)' }}></i> Customer Satisfaction</li>
                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--primary-crimson)' }}></i> Rapid Response Time</li>
                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--primary-crimson)' }}></i> Professional Integrity</li>
              </ul>
            </div>
            
            <div className="about-image glass-panel" style={{ flex: '1 1 400px', padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ backgroundColor: 'var(--bg-light)', height: '400px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="./images/about-us.jpg" alt="Fire Safety Professionals" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Mission</h2>
          </div>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
            To protect lives and properties by delivering innovative, reliable, and high-quality fire safety solutions. We strive to be the most trusted name in the industry through our unwavering commitment to excellence and customer safety.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
