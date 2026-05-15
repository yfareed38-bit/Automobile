import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Shield, Gauge, Cpu, 
  MessageCircle, Phone, Calendar, Download, 
  ChevronLeft, ChevronRight, Calculator
} from 'lucide-react';
import './VehicleDetail.css';

// Reuse images for demo
import suvImg from '../assets/images/suv.png';
import sedanImg from '../assets/images/sedan.png';
import evImg from '../assets/images/ev.png';
import heroImg from '../assets/images/hero.png';

const VehicleDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Specs');
  const [rotation, setRotation] = useState(0);

  // Mock data
  const vehicle = {
    name: 'Yasir E-Vision',
    tagline: 'The Pinnacle of Electric Luxury',
    price: '$95,000',
    image: evImg,
    description: 'The Yasir E-Vision represents a leap forward in automotive engineering. With a dual-motor setup delivering instantaneous torque and a chassis tuned for both comfort and precision.',
    specs: {
      'Acceleration': '0-100 km/h in 2.8s',
      'Top Speed': '280 km/h',
      'Range': '650 km (WLTP)',
      'Horsepower': '850 hp',
      'Charging': '10-80% in 18 mins',
      'Drive': 'All-Wheel Drive (AWD)'
    },
    features: [
      { title: 'AI Pilot', desc: 'Level 3 autonomous driving capabilities.' },
      { title: 'Sky View', desc: 'Panoramic smart-glass roof with variable tint.' },
      { title: 'Sonic Audio', desc: '24-speaker spatial audio system.' }
    ]
  };

  const handleRotate = (dir) => {
    setRotation(prev => prev + (dir * 45));
  };

  return (
    <div className="vehicle-detail">
      {/* Hero Section / 360 View */}
      <section className="detail-hero container">
        <div className="detail-header">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="subtitle">Yasir Series</span>
            <h1>{vehicle.name}</h1>
            <p className="tagline">{vehicle.tagline}</p>
          </motion.div>
          <div className="detail-price">
            <span>Starting from</span>
            <h2>{vehicle.price}</h2>
          </div>
        </div>

        <div className="view-360-container">
          <div className="view-360-controls">
            <button onClick={() => handleRotate(-1)}><ChevronLeft /></button>
            <span className="view-label">360° INTERACTIVE VIEW</span>
            <button onClick={() => handleRotate(1)}><ChevronRight /></button>
          </div>
          <motion.div 
            animate={{ rotateY: rotation }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="vehicle-main-img"
          >
            <img src={vehicle.image} alt={vehicle.name} />
          </motion.div>
          <div className="view-hint">Drag to rotate (Simulated)</div>
        </div>

        <div className="detail-ctas">
          <button className="btn-primary"><Calendar size={20} /> Book Test Drive</button>
          <button className="btn-outline"><MessageCircle size={20} /> WhatsApp Inquiry</button>
          <button className="btn-outline"><Download size={20} /> Brochure PDF</button>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="performance-stats container">
        <div className="stats-row">
          <div className="stat-item">
            <Zap size={24} />
            <div>
              <h4>{vehicle.specs['Acceleration']}</h4>
              <p>Acceleration</p>
            </div>
          </div>
          <div className="stat-item">
            <Gauge size={24} />
            <div>
              <h4>{vehicle.specs['Top Speed']}</h4>
              <p>Top Speed</p>
            </div>
          </div>
          <div className="stat-item">
            <Cpu size={24} />
            <div>
              <h4>{vehicle.specs['Horsepower']}</h4>
              <p>Horsepower</p>
            </div>
          </div>
          <div className="stat-item">
            <Shield size={24} />
            <div>
              <h4>{vehicle.specs['Range']}</h4>
              <p>Range</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="detail-tabs section-padding">
        <div className="container">
          <div className="tabs-header">
            {['Specs', 'Features', 'EMI Calculator'].map(tab => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="tab-content glass-card">
            {activeTab === 'Specs' && (
              <div className="specs-grid animate-fadeIn">
                {Object.entries(vehicle.specs).map(([key, val]) => (
                  <div key={key} className="spec-tile">
                    <span className="spec-label">{key}</span>
                    <span className="spec-val">{val}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'Features' && (
              <div className="features-list animate-fadeIn">
                {vehicle.features.map((f, i) => (
                  <div key={i} className="feature-tile">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'EMI Calculator' && (
              <div className="emi-calculator animate-fadeIn">
                <EMICalc price={95000} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const EMICalc = ({ price }) => {
  const [tenure, setTenure] = useState(60);
  const [downpayment, setDownpayment] = useState(price * 0.2);
  
  const loanAmount = price - downpayment;
  const interestRate = 0.08; // 8%
  const monthlyRate = interestRate / 12;
  const emi = Math.round((loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1));

  return (
    <div className="emi-calc-grid">
      <div className="emi-inputs">
        <div className="input-group">
          <label>Down Payment ($)</label>
          <input 
            type="range" 
            min={price * 0.1} 
            max={price * 0.8} 
            value={downpayment} 
            onChange={(e) => setDownpayment(Number(e.target.value))} 
          />
          <div className="input-val">${downpayment.toLocaleString()}</div>
        </div>
        <div className="input-group">
          <label>Tenure (Months)</label>
          <select value={tenure} onChange={(e) => setTenure(Number(e.target.value))}>
            <option value={24}>24 Months</option>
            <option value={36}>36 Months</option>
            <option value={48}>48 Months</option>
            <option value={60}>60 Months</option>
          </select>
        </div>
      </div>
      <div className="emi-result">
        <Calculator size={48} className="calc-icon" />
        <div className="emi-amount">
          <span>Monthly EMI</span>
          <h2>${emi.toLocaleString()}</h2>
        </div>
        <p className="emi-note">Based on 8% annual interest rate.</p>
      </div>
    </div>
  );
};

export default VehicleDetail;
