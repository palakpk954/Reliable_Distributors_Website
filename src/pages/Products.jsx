import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Pages.css';
import './Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    { category: 'Extinguishers', image: "/images/abc.svg", title: "ABC Fire Extinguisher", description: "Suitable for multiple fire types including electrical and solid fires (Class A, B, C)." },
    { category: 'Extinguishers', image: "/images/co2.svg", title: "CO2 Fire Extinguisher", description: "Ideal for electrical fires and sensitive equipment. Leaves no residue (Class B, Electrical)." },
    { category: 'Extinguishers', image: "/images/foam.svg", title: "Water & Foam Fire Extinguisher", description: "Perfect for flammable liquids like petrol and diesel, as well as solid combustibles (Class A, B)." },
    { category: 'Extinguishers', image: "/images/abc.svg", title: "Clean Agent Fire Extinguisher", description: "Eco-friendly, leaves no residue, safe for sensitive electronic equipment." },
    { category: 'Extinguishers', image: "/images/co2.svg", title: "Wet Chemical (Kitchen)", description: "Specially designed for Class F fires involving cooking oils and fats." },
    { category: 'Extinguishers', image: "/images/foam.svg", title: "Automatic Modular Extinguisher", description: "Heat-activated modular units for server rooms and unmanned areas." },
    { category: 'Alarms', image: "/images/fire-alarm.jpg", title: "Smoke & Heat Detectors", description: "Wireless networkable, photoelectric, and conventional heat detectors." },
    { category: 'Alarms', image: "/images/fire-alarm.jpg", title: "Fire Alarm Systems", description: "Intelligent addressable fire detection and alarm systems." },
    { category: 'Systems', image: "/images/fire-sprinkler.jpg", title: "Fire Fighting Systems", description: "Comprehensive range of fire sprinklers, hydrant valves, hose reels, and cabinets." }
  ];

  const categories = ['All', 'Extinguishers', 'Alarms', 'Systems'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header">
        <h1>Fire Safety Products</h1>
        <p>Explore our wide range of certified fire extinguishers and safety equipment.</p>
      </div>

      <section className="section bg-light">
        <div className="container">
          
          <div className="filter-bar">
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="input-field"
              />
            </div>
            
            <div className="category-filters">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                  style={{ color: activeCategory === cat ? '' : 'var(--text-main)', borderColor: 'var(--text-muted)' }}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              <h2>No products found matching your criteria.</h2>
            </div>
          ) : (
            <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} {...product} delay={0.05 * (index + 1)} />
              ))}
            </div>
          )}
          
        </div>
      </section>
    </div>
  );
};

export default Products;
