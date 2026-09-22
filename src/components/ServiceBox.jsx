import React from 'react';
import './ServiceBox.css';

const ServiceBox = ({ image, title, description, delay }) => {
  return (
    <div className="service-box glass-panel animate-fade-up" style={{ animationDelay: `${delay}s` }}>
      <div className="service-image-container">
        <img src={image} alt={title} className="service-illustration" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceBox;
