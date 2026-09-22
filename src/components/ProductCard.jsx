import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ title, description, image, delay }) => {
  const { addToCart } = useCart();

  const handleDownload = (e) => {
    e.preventDefault();
    alert(`Downloading specs for ${title}... (Demo)`);
  };

  return (
    <motion.div 
      className="product-card card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="product-img-wrapper">
        <img src={image} alt={title} className="product-image" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      
      <div className="product-actions">
        <button className="btn btn-primary" onClick={() => addToCart({ title, image })}>
          <i className="fa-solid fa-cart-plus"></i> Add to Quote
        </button>
        <button className="btn-link" onClick={handleDownload} title="Download Specifications">
          <i className="fa-solid fa-file-pdf"></i> Specs
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
