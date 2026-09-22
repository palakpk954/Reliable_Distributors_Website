import React from 'react';
import { motion } from 'framer-motion';
import './ServiceBox.css';

const ServiceBox = ({ image, title, description, delay }) => {
  return (
    <motion.div 
      className="service-box glass-panel"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="service-image-container">
        <img src={image} alt={title} className="service-illustration" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default ServiceBox;
