import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Check, Minus } from 'lucide-react';
import './Compare.css';

const Compare = () => {
  const { compareList, removeFromCompare, formatPrice } = useApp();

  const specs = [
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Starting Price', isPrice: true },
    { key: 'acceleration', label: '0-100 km/h' },
    { key: 'topSpeed', label: 'Top Speed' },
    { key: 'range', label: 'Range / Fuel Econ' },
    { key: 'power', label: 'Max Power' },
  ];

  // Helper to get spec value (mock data since real vehicles list might be limited)
  const getSpecValue = (vehicle, key) => {
    // In a real app, this would come from a database. 
    // Here we'll simulate based on name/category
    if (key === 'category') return vehicle.category || 'Luxury';
    if (key === 'price') return vehicle.price;
    
    // Simulations
    if (vehicle.name.includes('SUV')) {
      if (key === 'acceleration') return '5.2s';
      if (key === 'topSpeed') return '220 km/h';
      if (key === 'range') return '12 km/L';
      if (key === 'power') return '450 hp';
    }
    if (vehicle.name.includes('E-Vision')) {
      if (key === 'acceleration') return '2.8s';
      if (key === 'topSpeed') return '280 km/h';
      if (key === 'range') return '600 km';
      if (key === 'power') return '600 hp';
    }
    return 'N/A';
  };

  if (compareList.length === 0) {
    return (
      <div className="compare-page empty section-padding">
        <div className="container text-center">
          <h1>No Vehicles Selected</h1>
          <p>Go to our inventory and add vehicles to compare their features.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="compare-page section-padding">
      <div className="container">
        <div className="section-header">
          <h1>Vehicle <span className="gradient-text">Comparison</span></h1>
          <p>Detailed side-by-side analysis of your selected Yasir Motors models.</p>
        </div>

        <div className="compare-table-wrapper">
          <table className="compare-table glass">
            <thead>
              <tr>
                <th>Features</th>
                {compareList.map(v => (
                  <th key={v.id}>
                    <div className="compare-header-item">
                      <button className="remove-btn" onClick={() => removeFromCompare(v.id)}><X size={16} /></button>
                      <img src={v.image} alt={v.name} />
                      <h3>{v.name}</h3>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map(spec => (
                <tr key={spec.key}>
                  <td className="spec-label">{spec.label}</td>
                  {compareList.map(v => (
                    <td key={v.id}>
                      {spec.isPrice ? formatPrice(getSpecValue(v, spec.key)) : getSpecValue(v, spec.key)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compare;
