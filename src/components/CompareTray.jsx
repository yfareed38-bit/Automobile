import { Link } from 'react-router-dom';
import { X, ArrowRightLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './CompareTray.css';

const CompareTray = () => {
  const { compareList, removeFromCompare } = useApp();

  if (compareList.length === 0) return null;

  return (
    <div className="compare-tray glass">
      <div className="container tray-content">
        <div className="tray-info">
          <ArrowRightLeft size={20} className="accent-text" />
          <span>Compare Vehicles ({compareList.length}/3)</span>
        </div>
        <div className="tray-items">
          {compareList.map(v => (
            <div key={v.id} className="tray-item">
              <img src={v.image} alt={v.name} />
              <span>{v.name}</span>
              <button onClick={() => removeFromCompare(v.id)}><X size={14} /></button>
            </div>
          ))}
        </div>
        <div className="tray-actions">
          <Link to="/compare" className="btn-primary btn-sm">Compare Now</Link>
        </div>
      </div>
    </div>
  );
};

export default CompareTray;
