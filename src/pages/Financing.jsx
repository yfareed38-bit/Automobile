import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Landmark, ShieldCheck, PieChart, ChevronRight } from 'lucide-react';
import './Financing.css';

const Financing = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure] = useState(60);
  const [interest, setInterest] = useState(7.5);

  const calculateEMI = () => {
    const r = interest / 12 / 100;
    const n = tenure;
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  return (
    <div className="financing-page">
      <div className="page-header section-padding">
        <div className="container">
          <span className="subtitle">Easy Ownership</span>
          <h1>Financial <span className="gradient-text">Solutions</span></h1>
          <p>Flexible installment plans and low-interest rates tailored to your needs.</p>
        </div>
      </div>

      <section className="calculator-section container section-padding">
        <div className="calculator-wrapper glass-card">
          <div className="calc-inputs">
            <h2>Loan <span className="gradient-text">Calculator</span></h2>
            <div className="input-group">
              <label>Loan Amount ($)</label>
              <input 
                type="range" min="10000" max="200000" step="5000" 
                value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} 
              />
              <div className="val-display">${loanAmount.toLocaleString()}</div>
            </div>
            <div className="input-group">
              <label>Tenure (Months)</label>
              <input 
                type="range" min="12" max="84" step="12" 
                value={tenure} onChange={(e) => setTenure(Number(e.target.value))} 
              />
              <div className="val-display">{tenure} Months</div>
            </div>
            <div className="input-group">
              <label>Interest Rate (%)</label>
              <input 
                type="range" min="3" max="15" step="0.5" 
                value={interest} onChange={(e) => setInterest(Number(e.target.value))} 
              />
              <div className="val-display">{interest}%</div>
            </div>
          </div>
          <div className="calc-result">
            <div className="emi-circle glass">
              <span className="emi-label">Estimated Monthly EMI</span>
              <h2 className="emi-value">${calculateEMI().toLocaleString()}</h2>
            </div>
            <p className="note">*Subject to bank approval and credit score.</p>
            <button className="btn-primary w-full">Apply for Loan</button>
          </div>
        </div>
      </section>

      <section className="partners container section-padding">
        <div className="section-header text-center">
          <h2>Our Banking <span className="gradient-text">Partners</span></h2>
        </div>
        <div className="partners-grid">
          {['Global Chase', 'Titan Bank', 'Vanguard Finance', 'Apex Credits'].map((bank) => (
            <div key={bank} className="bank-card glass">
              <Landmark size={40} className="bank-icon" />
              <h3>{bank}</h3>
              <p>Special rates for Titan owners.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="insurance section-padding bg-alt">
        <div className="container insurance-box glass-card">
          <div className="insurance-text">
            <h2>Titan <span className="gradient-text">Insurance</span></h2>
            <p>Comprehensive coverage including zero-depreciation and roadside assistance.</p>
            <ul className="ins-list">
              <li><ShieldCheck size={20} /> Zero Depreciation</li>
              <li><ShieldCheck size={20} /> 24/7 Roadside Assistance</li>
              <li><ShieldCheck size={20} /> Cashless Repairs</li>
            </ul>
            <button className="btn-outline">View Plans <ChevronRight size={20} /></button>
          </div>
          <div className="insurance-img">
             <PieChart size={200} className="chart-icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Financing;
