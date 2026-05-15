import { useState } from 'react';
import { Search, Filter, ShoppingBag, CheckCircle } from 'lucide-react';
import './Parts.css';

const Parts = () => {
  const [activeCat, setActiveCat] = useState('All');

  const parts = [
    { name: 'Yasir Alloy Wheels', price: '$1,200', category: 'Accessories', image: 'https://via.placeholder.com/300x200?text=Wheels' },
    { name: 'Premium Floor Mats', price: '$150', category: 'Interior', image: 'https://via.placeholder.com/300x200?text=Mats' },
    { name: 'Carbon Fiber Spoiler', price: '$850', category: 'Exterior', image: 'https://via.placeholder.com/300x200?text=Spoiler' },
    { name: 'Performance Brake Pads', price: '$450', category: 'Genuine Parts', image: 'https://via.placeholder.com/300x200?text=Brakes' },
    { name: 'Smart Key Fob Case', price: '$45', category: 'Accessories', image: 'https://via.placeholder.com/300x200?text=KeyFob' },
    { name: 'LED Fog Lights', price: '$320', category: 'Exterior', image: 'https://via.placeholder.com/300x200?text=Lights' },
  ];

  const categories = ['All', 'Genuine Parts', 'Accessories', 'Interior', 'Exterior'];

  const filteredParts = activeCat === 'All' ? parts : parts.filter(p => p.category === activeCat);

  return (
    <div className="parts-page">
      <div className="page-header section-padding">
        <div className="container">
          <span className="subtitle">Enhance Your Drive</span>
          <h1>Parts & <span className="gradient-text">Accessories</span></h1>
          <p>Genuine parts and premium accessories designed specifically for your Yasir.</p>
        </div>
      </div>

      <div className="container parts-content section-padding">
        <div className="parts-controls glass">
          <div className="cat-filters">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`cat-btn ${activeCat === cat ? 'active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="parts-search">
            <Search size={20} />
            <input type="text" placeholder="Search parts..." />
          </div>
        </div>

        <div className="parts-grid">
          {filteredParts.map((part, i) => (
            <div key={i} className="part-card glass-card">
              <div className="part-img">
                <img src={part.image} alt={part.name} />
              </div>
              <div className="part-info">
                <span className="part-cat">{part.category}</span>
                <h3>{part.name}</h3>
                <div className="part-footer">
                  <span className="part-price">{part.price}</span>
                  <button className="btn-primary-sm">Inquire</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="genuine-guarantee section-padding bg-alt">
        <div className="container guarantee-box">
          <div className="guarantee-text">
            <h2>The Yasir <span className="gradient-text">Guarantee</span></h2>
            <p>Every genuine part is engineered to the same exacting standards as our vehicles, ensuring perfect fit and performance.</p>
            <ul className="guarantee-list">
              <li><CheckCircle size={20} /> 2-Year Warranty</li>
              <li><CheckCircle size={20} /> Certified Fitment</li>
              <li><CheckCircle size={20} /> Performance Tested</li>
            </ul>
          </div>
          <div className="guarantee-icon">
             <ShoppingBag size={120} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parts;
