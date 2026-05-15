import React, { useState } from 'react';
import { Calculator, Zap, Fuel, TrendingUp, Car } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Tools.css';

const Tools = () => {
  const { currency } = useApp();
  const [activeTab, setActiveTab] = useState('savings');
  
  // EV Savings State
  const [mileage, setMileage] = useState(1500);
  const [fuelPrice, setFuelPrice] = useState(280); // PKR per liter
  const gasEfficiency = 12; // km/L
  const electricCost = 50; // PKR per unit
  const evEfficiency = 6; // km/unit

  const calculateSavings = () => {
    const fuelCost = (mileage / gasEfficiency) * fuelPrice;
    const evCost = (mileage / evEfficiency) * electricCost;
    return {
      monthly: fuelCost - evCost,
      yearly: (fuelCost - evCost) * 12
    };
  };

  const savings = calculateSavings();

  return (
    <div className="tools-page section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h1>Automotive <span className="gradient-text">Tools</span></h1>
          <p>Smart calculators to help you make informed decisions about your next vehicle.</p>
        </div>

        <div className="tools-tabs">
          <button 
            className={`tab-btn ${activeTab === 'savings' ? 'active' : ''}`}
            onClick={() => setActiveTab('savings')}
          >
            <Zap size={20} /> EV Savings
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tradein' ? 'active' : ''}`}
            onClick={() => setActiveTab('tradein')}
          >
            <Car size={20} /> Trade-in Valuation
          </button>
        </div>

        <div className="tool-content">
          {activeTab === 'savings' ? (
            <div className="tool-grid">
              <div className="tool-inputs glass-card">
                <h3>Savings <span className="gradient-text">Parameters</span></h3>
                <div className="input-group">
                  <label>Monthly Mileage (km)</label>
                  <input 
                    type="range" min="500" max="5000" step="100" 
                    value={mileage} onChange={(e) => setMileage(e.target.value)} 
                  />
                  <div className="input-val">{mileage} km</div>
                </div>
                <div className="input-group">
                  <label>Fuel Price (per liter)</label>
                  <input 
                    type="number" 
                    value={fuelPrice} onChange={(e) => setFuelPrice(e.target.value)} 
                  />
                </div>
                <div className="info-box glass">
                  <TrendingUp size={16} />
                  <p>Calculated based on standard Yasir E-Vision efficiency vs typical luxury sedan.</p>
                </div>
              </div>
              <div className="tool-results glass-card accent-border">
                <div className="result-header">
                  <Calculator size={32} className="accent-text" />
                  <h3>Estimated Savings</h3>
                </div>
                <div className="savings-display">
                  <div className="savings-item">
                    <span>Monthly</span>
                    <h2 className="accent-text">{currency === 'PKR' ? 'Rs' : '$'} {savings.monthly.toLocaleString(undefined, {maximumFractionDigits: 0})}</h2>
                  </div>
                  <div className="savings-item">
                    <span>Yearly</span>
                    <h2 className="accent-text">{currency === 'PKR' ? 'Rs' : '$'} {savings.yearly.toLocaleString(undefined, {maximumFractionDigits: 0})}</h2>
                  </div>
                </div>
                <p className="savings-desc">By switching to electric with Yasir Motors, you're not just saving money, but also reducing your carbon footprint by approximately 2.4 tons of CO2 annually.</p>
              </div>
            </div>
          ) : (
            <div className="trade-in-form glass-card">
              <h3>Get a <span className="gradient-text">Valuation</span></h3>
              <p>Tell us about your current car and we'll give you an estimated trade-in value towards a new Yasir vehicle.</p>
              <div className="form-grid">
                <div className="form-group">
                  <label>Make & Model</label>
                  <input type="text" placeholder="e.g. Toyota Corolla" />
                </div>
                <div className="form-group">
                  <label>Year</label>
                  <input type="number" placeholder="2020" />
                </div>
                <div className="form-group">
                  <label>Mileage (km)</label>
                  <input type="number" placeholder="45,000" />
                </div>
                <div className="form-group">
                  <label>Condition</label>
                  <select>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                    <option>Poor</option>
                  </select>
                </div>
              </div>
              <button className="btn-primary mt-2" onClick={() => alert('Thank you! Our valuation expert will contact you within 24 hours.')}>Get Instant Estimate</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tools;
