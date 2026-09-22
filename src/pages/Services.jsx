import React from 'react';
import ServiceBox from '../components/ServiceBox';
import './Pages.css';

const Services = () => {
  const services = [
    { image: "./images/service_install.jpg", title: "Installation", description: "Professional fire extinguisher and hydrant system installation tailored to your specific site requirements." },
    { image: "./images/service_refill.jpg", title: "Refilling & AMC", description: "Quick, reliable refilling services. Enjoy free refilling with our Annual Maintenance Contracts (AMC)." },
    { image: "./images/service_maintenance.jpg", title: "Maintenance", description: "Regular inspection and servicing of alarms, sprinklers, and extinguishers to ensure readiness." },
    { image: "./images/service_consultation.jpg", title: "Consultation", description: "Expert guidance for comprehensive fire safety solutions for businesses and industries." },
    { image: "./images/service_training.jpg", title: "Training", description: "Fire safety and equipment usage training for your staff to respond effectively in emergencies." },
    { image: "./images/service_audit.jpg", title: "Fire Safety Audits", description: "Complete fire safety audits to ensure full compliance with local regulations and safety standards." }
  ];

  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive fire safety services to ensure maximum protection and compliance.</p>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {services.map((service, index) => (
              <ServiceBox key={index} {...service} delay={0.1 * (index + 1)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
