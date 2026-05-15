import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import './Vehicles.css';

import suvImg from '../assets/images/suv.png';
import sedanImg from '../assets/images/sedan.png';
import evImg from '../assets/images/ev.png';
import heroImg from '../assets/images/hero.png';

const Vehicles = () => {
  const [filter, setFilter] = useState('All');
  
  const vehicles = [
    { id: 1, name: 'Yasir X-SUV', category: 'SUVs', image: suvImg, price: '$85,000', specs: '500hp | AWD | 7-Seater' },
    { id: 2, name: 'Yasir S-Executive', category: 'Sedans', image: sedanImg, price: '$72,000', specs: '400hp | RWD | Luxury' },
    { id: 3, name: 'Yasir E-Vision', category: 'EVs', image: evImg, price: '$95,000', specs: '600km Range | Dual Motor' },
    { id: 4, name: 'Yasir Sport-GTR', category: 'Luxury Series', image: heroImg, price: '$150,000', specs: '800hp | Track Ready' },
    { id: 5, name: 'Yasir Commander', category: 'Commercial Vehicles', image: suvImg, price: '$55,000', specs: 'Towing 5000kg | Diesel' },
    { id: 6, name: 'Yasir Urban-E', category: 'EVs', image: evImg, price: '$45,000', specs: '350km Range | Compact' },
  ];

  const categories = ['All', 'SUVs', 'Sedans', 'EVs', 'Commercial Vehicles', 'Luxury Series', 'Upcoming Models'];

  const filteredVehicles = filter === 'All' 
    ? vehicles 
    : vehicles.filter(v => v.category === filter);

  return (
    <div className="vehicles-page">
      <div className="page-header section-padding">
        <div className="container">
          <span className="subtitle">Exploration</span>
          <h1>Our <span className="gradient-text">Inventory</span></h1>
          <p>Discover the perfect vehicle that matches your lifestyle and ambition.</p>
        </div>
      </div>

      <div className="inventory-section container">
        <div className="inventory-controls glass">
          <div className="categories">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`cat-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="search-bar">
            <Search size={20} />
            <input type="text" placeholder="Search models..." />
          </div>
        </div>

        <motion.div layout className="inventory-grid">
          <AnimatePresence mode='popLayout'>
            {filteredVehicles.map((vehicle) => (
              <motion.div 
                layout
                key={vehicle.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="vehicle-card glass-card"
              >
                <div className="vehicle-img-wrapper">
                  <img src={vehicle.image} alt={vehicle.name} />
                </div>
                <div className="vehicle-info">
                  <span className="vehicle-cat">{vehicle.category}</span>
                  <h3>{vehicle.name}</h3>
                  <p className="specs">{vehicle.specs}</p>
                  <div className="vehicle-footer">
                    <span className="price">{vehicle.price}</span>
                    <div className="actions">
                      <button className="btn-outline-sm">Compare</button>
                      <button className="btn-primary-sm">Explore</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Vehicles;
