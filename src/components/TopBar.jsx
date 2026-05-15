import { Globe, DollarSign, Moon, Sun } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './TopBar.css';

const TopBar = () => {
  const { theme, toggleTheme, language, setLanguage, currency, setCurrency } = useApp();

  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="top-bar-left">
          <div className="top-item">
            <Globe size={14} />
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="EN">English</option>
              <option value="UR">اردو (Urdu)</option>
            </select>
          </div>
          <div className="top-item">
            <DollarSign size={14} />
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="USD">USD ($)</option>
              <option value="PKR">PKR (Rs)</option>
            </select>
          </div>
        </div>
        <div className="top-bar-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
