import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FireParticles from '../components/FireParticles';
import ServiceBox from '../components/ServiceBox';
import ProductCard from '../components/ProductCard';
import TestimonialSlider from '../components/TestimonialSlider';
import './Home.css';
import './Pages.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    let whatsappMessage = `New Quote Request:%0AName: ${formData.name}%0APhone: ${formData.phone}%0ARequirement: ${formData.message}`;
    let whatsappURL = `https://wa.me/917976315557?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const services = [
    { image: "./images/service_install.jpg", title: "Installation", description: "Professional installation of extinguishers, alarms, and hydrant systems." },
    { image: "./images/service_refill.jpg", title: "Refilling & AMC", description: "Reliable refilling service with our Annual Maintenance Contracts." },
    { image: "./images/service_maintenance.jpg", title: "Maintenance", description: "Regular inspection and servicing to ensure peak performance." },
    { image: "./images/service_audit.jpg", title: "Safety Audits", description: "Comprehensive audits for regulatory compliance." }
  ];

  const products = [
    { image: "./images/hero-banner.jpg", title: "Portable Fire Extinguishers", description: "Complete range including ABC, CO2, Clean Agent, Foam, and Wet Chemical types." },
    { image: "./images/fire-alarm.jpg", title: "Smoke Detectors & Alarms", description: "Intelligent addressable systems and standalone wireless detectors." },
    { image: "./images/fire-sprinkler.jpg", title: "Fire Fighting Systems", description: "High-quality fire sprinklers, hydrant valves, and hose reels." }
  ];

  return (
    <>
      <section className="hero">
        <FireParticles />
        <div className="container hero-split">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="title-xl">Reliable Fire <span className="text-gradient">Safety Solutions</span></h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Protecting lives and properties with premium fire extinguishers, expert installation, and 24/7 maintenance services.
            </motion.p>
            <motion.div 
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/services" className="btn btn-primary">
                Our Services <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img src="./images/hero_illustration.jpg" alt="Firefighter Mascot" className="hero-3d-illustration" />
          </motion.div>
        </div>
      </section>

      <section className="section trust-section bg-dark">
        <div className="container">
          <div className="trust-grid">
            {[
              { icon: 'fa-shield-halved', title: '1000+ Audits', desc: 'Certified by top regulatory bodies across the nation.' },
              { icon: 'fa-truck-fast', title: '24/7 Response', desc: 'Emergency fire safety support when you need it most.' },
              { icon: 'fa-user-tie', title: 'Certified Experts', desc: 'Our team consists of highly trained fire safety professionals.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="trust-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="trust-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Our Premium Services</h2>
            <p>Engaging 3D solutions tailored for your safety needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceBox key={index} {...service} delay={0.1 * (index + 1)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Certified equipment you can depend on</p>
          </div>
          <div className="products-grid">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} delay={0.1 * (index + 1)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Trusted by Businesses</h2>
            <p>See what our clients have to say about our fire safety solutions.</p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2>Need Fire Safety Equipment?</h2>
          <p>Request a quote and our team will contact you promptly.</p>
          
          <motion.div 
            className="quote-form-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="quote-form" onSubmit={handleQuoteSubmit}>
              <input type="text" name="name" className="input-field" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
              <input type="tel" name="phone" className="input-field" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
              <input type="email" name="email" className="input-field" placeholder="Email Address" value={formData.email} onChange={handleChange} />
              <textarea name="message" className="input-field" placeholder="Your Requirement" required value={formData.message} onChange={handleChange}></textarea>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Get Quote Now</button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
