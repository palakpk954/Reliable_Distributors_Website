import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ title, description, image, delay }) => {
  const { addToCart } = useCart();

  const handleDownload = (e) => {
    e.preventDefault();
    alert(`Downloading specs for ${title}... (Demo)`);
  };

  return (
    <div className="product-card card animate-fade-up" style={{ animationDelay: `${delay}s` }}>
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
    </div>
  );
};

export default ProductCard;
