import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const testimonials = [
  {
    id: 1,
    text: "Reliable Distributors completely overhauled our warehouse fire safety systems. Their team is professional, fast, and the Annual Maintenance Contract takes all the worry off our hands.",
    author: "James T.",
    company: "Logistics Pro Inc."
  },
  {
    id: 2,
    text: "We needed a complete audit and installation for our new restaurant. They handled everything from the wet chemical extinguishers to the kitchen hood systems perfectly.",
    author: "Sarah K.",
    company: "The Grand Bistro"
  },
  {
    id: 3,
    text: "Top-notch quality products and exceptional customer service. The fire safety training they provided our staff was incredibly thorough and engaging.",
    author: "David R.",
    company: "TechNexus IT Solutions"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonial-slider-container">
      <div className="slider-controls prev" onClick={goToPrev}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      
      <div className="slider-window">
        <div 
          className="slider-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="slide">
              <div className="testimonial-card glass-panel">
                <i className="fa-solid fa-quote-left quote-icon"></i>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-controls next" onClick={goToNext}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>

      <div className="slider-dots">
        {testimonials.map((_, idx) => (
          <span 
            key={idx} 
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
