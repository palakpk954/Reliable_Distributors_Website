import React from 'react';
import ServiceBox from '../components/ServiceBox';
import './Pages.css';

const Services = () => {
  const services = [
    { icon: "fa-solid fa-screwdriver-wrench", title: "Installation", description: "Professional fire extinguisher and hydrant system installation tailored to your specific site requirements." },
    { icon: "fa-solid fa-arrows-rotate", title: "Refilling & AMC", description: "Quick, reliable refilling services. Enjoy free refilling with our Annual Maintenance Contracts (AMC)." },
    { icon: "fa-solid fa-clipboard-check", title: "Maintenance", description: "Regular inspection and servicing of alarms, sprinklers, and extinguishers to ensure readiness." },
    { icon: "fa-solid fa-user-shield", title: "Consultation", description: "Expert guidance for comprehensive fire safety solutions for businesses and industries." },
    { icon: "fa-solid fa-chalkboard-user", title: "Training", description: "Fire safety and equipment usage training for your staff to respond effectively in emergencies." },
    { icon: "fa-solid fa-file-signature", title: "Fire Safety Audits", description: "Complete fire safety audits to ensure full compliance with local regulations and safety standards." }
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
