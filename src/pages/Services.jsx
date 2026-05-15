import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Wrench, Clock, FileText, CheckCircle } from 'lucide-react';
import './Services.css';

const Services = () => {
  const servicePackages = [
    { name: 'Silver Plan', price: '$199', features: ['Oil Change', 'Filter Replacement', '20-Point Inspection', 'Fluid Top-up'] },
    { name: 'Gold Plan', price: '$399', features: ['Full Synthetic Oil', 'Brake Inspection', 'Wheel Alignment', 'AC Sanitization', 'Wash & Wax'] },
    { name: 'Titan Platinum', price: '$599', features: ['Full Service', 'Engine Tuning', 'Interior Detailing', 'Free Pickup/Drop', '24/7 Roadside Assist'] },
  ];

  return (
    <div className="services-page">
      <div className="page-header section-padding">
        <div className="container">
          <span className="subtitle">Care & Maintenance</span>
          <h1>Premium <span className="gradient-text">Services</span></h1>
          <p>Maintain your Titan's peak performance with our certified technician network.</p>
        </div>
      </div>

      <section className="service-features container">
        <div className="features-grid">
          <div className="glass-card">
            <Wrench className="service-icon" />
            <h3>Expert Repairs</h3>
            <p>Using only genuine Titan parts and state-of-the-art diagnostic tools.</p>
          </div>
          <div className="glass-card">
            <ShieldCheck className="service-icon" />
            <h3>Warranty Coverage</h3>
            <p>Comprehensive 5-year bumper-to-bumper warranty on all new models.</p>
          </div>
          <div className="glass-card">
            <Clock className="service-icon" />
            <h3>Express Service</h3>
            <p>Routine maintenance completed within 90 minutes or it's free.</p>
          </div>
        </div>
      </section>

      <section className="packages section-padding container">
        <div className="section-header text-center">
          <h2>Service <span className="gradient-text">Packages</span></h2>
        </div>
        <div className="packages-grid">
          {servicePackages.map((pkg, i) => (
            <motion.div 
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="package-card glass"
            >
              <div className="package-header">
                <h3>{pkg.name}</h3>
                <h2>{pkg.price}</h2>
              </div>
              <ul className="package-features">
                {pkg.features.map(f => (
                  <li key={f}><CheckCircle size={16} /> {f}</li>
                ))}
              </ul>
              <button className="btn-outline w-full">Choose Plan</button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="booking section-padding container">
        <div className="booking-box glass-card">
          <div className="booking-text">
            <h2>Book a <span className="gradient-text">Service</span></h2>
            <p>Schedule your next maintenance visit online and skip the queue.</p>
          </div>
          <form className="booking-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-row">
              <select>
                <option>Select Model</option>
                <option>Titan X-SUV</option>
                <option>Titan S-Executive</option>
                <option>Titan E-Vision</option>
              </select>
              <input type="date" />
            </div>
            <textarea placeholder="Service Requirements / Notes"></textarea>
            <button className="btn-primary">Confirm Booking</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Services;
