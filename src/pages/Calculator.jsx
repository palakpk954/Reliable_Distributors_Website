import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Calculator = () => {
  const [formData, setFormData] = useState({
    area: '',
    industryType: 'office',
    hazardLevel: 'low'
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateRequirements = (e) => {
    e.preventDefault();
    const areaSqFt = parseInt(formData.area);
    if (!areaSqFt || isNaN(areaSqFt)) return;

    let extinguisherCount = 0;
    let types = [];
    
    // Basic calculation logic (Simulated safety standards)
    if (formData.hazardLevel === 'low') {
      extinguisherCount = Math.ceil(areaSqFt / 3000); // 1 per 3000 sqft
      types.push('ABC Dry Powder (6kg) or Water CO2 (9L)');
    } else if (formData.hazardLevel === 'medium') {
      extinguisherCount = Math.ceil(areaSqFt / 1500); // 1 per 1500 sqft
      types.push('ABC Dry Powder (6kg)');
      types.push('CO2 Extinguisher (4.5kg) near electrical panels');
    } else {
      extinguisherCount = Math.ceil(areaSqFt / 1000); // 1 per 1000 sqft
      types.push('High-Capacity ABC Dry Powder (9kg)');
      types.push('Mechanical Foam (9L) for chemical/fuel areas');
      types.push('CO2 Extinguisher (4.5kg)');
    }

    if (formData.industryType === 'kitchen' || formData.industryType === 'restaurant') {
      types.push('Wet Chemical Extinguisher (Class F)');
      types.push('Fire Blanket');
    }
    
    if (formData.industryType === 'server_room' || formData.industryType === 'it') {
      types = ['Clean Agent Extinguisher (2kg/4kg)', 'CO2 Extinguisher (4.5kg)', 'Automatic Modular Systems'];
    }

    setResult({ count: Math.max(1, extinguisherCount), types });
  };

  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header">
        <h1>Safety Requirement Calculator</h1>
        <p>Estimate the fire safety equipment needed for your premises based on standard safety guidelines.</p>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            <div className="card">
              <h2 className="title-md" style={{ marginBottom: '1.5rem', color: 'var(--primary-crimson)' }}>
                <i className="fa-solid fa-calculator"></i> Enter Details
              </h2>
              <form onSubmit={calculateRequirements} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Total Floor Area (Sq. Ft.)</label>
                  <input type="number" name="area" className="input-field" placeholder="e.g. 5000" required value={formData.area} onChange={handleChange} />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Facility Type</label>
                  <select name="industryType" className="input-field" value={formData.industryType} onChange={handleChange}>
                    <option value="office">General Office / Retail</option>
                    <option value="warehouse">Warehouse / Storage</option>
                    <option value="factory">Manufacturing Factory</option>
                    <option value="kitchen">Commercial Kitchen / Restaurant</option>
                    <option value="it">Server Room / IT Setup</option>
                    <option value="residential">Residential Complex</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Hazard Level</label>
                  <select name="hazardLevel" className="input-field" value={formData.hazardLevel} onChange={handleChange}>
                    <option value="low">Low (Offices, Classrooms, Churches)</option>
                    <option value="medium">Medium (Light Manufacturing, Parking, Showrooms)</option>
                    <option value="high">High (Woodworking, Flammable Liquids, Warehouses)</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Calculate Requirements</button>
              </form>
            </div>

            <div className="card" style={{ background: result ? 'var(--dark-slate)' : 'var(--bg-white)', color: result ? 'var(--text-light)' : 'var(--text-main)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {!result ? (
                <div style={{ textAlign: 'center', opacity: 0.5 }}>
                  <i className="fa-solid fa-clipboard-list" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                  <h3>Your results will appear here</h3>
                  <p>Fill out the form to get an estimate.</p>
                </div>
              ) : (
                <div className="animate-fade-up">
                  <h2 className="title-md" style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>Estimated Requirements</h2>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '3rem', margin: 0 }}>{result.count}</h3>
                    <p style={{ fontSize: '1.125rem', opacity: 0.8 }}>Minimum number of primary extinguishers required per floor.</p>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--primary-crimson)', fontSize: '1.25rem' }}>Recommended Types:</h4>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                      {result.types.map((type, idx) => (
                        <li key={idx} style={{ marginBottom: '0.5rem' }}>{type}</li>
                      ))}
                    </ul>
                  </div>

                  <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '2rem' }}>
                    *Note: This is an automated estimate. For a legally compliant fire safety audit, please schedule a professional consultation.
                  </p>

                  <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>Book a Professional Audit</Link>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
