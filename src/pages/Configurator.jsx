import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Check, Info, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import evImg from '../assets/images/ev.png'; // Placeholder for visualization
import './Configurator.css';

const Configurator = () => {
  const { id } = useParams();
  
  const [config, setConfig] = useState({
    color: { name: 'Midnight Black', hex: '#0a0a0a' },
    rims: '21" Performance Alloys',
    interior: 'Lunar Grey Leather'
  });

  const options = {
    colors: [
      { name: 'Midnight Black', hex: '#0a0a0a' },
      { name: 'Titanium Silver', hex: '#8e8e8e' },
      { name: 'Electric Blue', hex: '#0072ff' },
      { name: 'Crimson Red', hex: '#b21f1f' }
    ],
    rims: [
      '19" Standard Alloys',
      '21" Performance Alloys',
      '22" Carbon Stealth'
    ],
    interiors: [
      'Obsidian Black Fabric',
      'Lunar Grey Leather',
      'Cinnabar Red Sport'
    ]
  };

  return (
    <div className="configurator-page section-padding">
      <div className="container">
        <div className="config-grid">
          {/* Visualizer */}
          <div className="config-preview glass-card">
            <AnimatePresence mode="wait">
              <motion.div 
                key={config.color.hex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="car-visual"
              >
                <div className="color-overlay" style={{ backgroundColor: config.color.hex, mixBlendMode: 'multiply' }}></div>
                <img src={evImg} alt="Car Preview" />
              </motion.div>
            </AnimatePresence>
            <div className="preview-info">
              <h3>{config.color.name}</h3>
              <p>{config.rims} • {config.interior}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="config-controls">
            <div className="control-section">
              <h3>Exterior <span className="gradient-text">Color</span></h3>
              <div className="color-grid">
                {options.colors.map(c => (
                  <button 
                    key={c.name}
                    className={`color-btn ${config.color.name === c.name ? 'active' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    onClick={() => setConfig({...config, color: c})}
                    title={c.name}
                  >
                    {config.color.name === c.name && <Check size={16} color="white" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-section">
              <h3>Performance <span className="gradient-text">Rims</span></h3>
              <div className="option-list">
                {options.rims.map(r => (
                  <button 
                    key={r}
                    className={`option-btn glass ${config.rims === r ? 'active' : ''}`}
                    onClick={() => setConfig({...config, rims: r})}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-section">
              <h3>Interior <span className="gradient-text">Style</span></h3>
              <div className="option-list">
                {options.interiors.map(i => (
                  <button 
                    key={i}
                    className={`option-btn glass ${config.interior === i ? 'active' : ''}`}
                    onClick={() => setConfig({...config, interior: i})}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>

            <div className="config-summary glass-card">
              <div className="summary-row">
                <span>Base Price</span>
                <span>$95,000</span>
              </div>
              <div className="summary-row">
                <span>Options</span>
                <span>$4,500</span>
              </div>
              <div className="total-row">
                <span>Total</span>
                <span className="accent-text">$99,500</span>
              </div>
              <button className="btn-primary w-100 mt-1">
                <Save size={18} /> Save Configuration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
