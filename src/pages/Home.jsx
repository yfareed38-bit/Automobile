import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Zap, Star, Shield, Award, ChevronRight,
  Rotate3d, Smartphone, MessageSquare, Calculator 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

// Import images
import heroImg from '../assets/images/hero.png';
import suvImg from '../assets/images/suv.png';
import sedanImg from '../assets/images/sedan.png';
import evImg from '../assets/images/ev.png';

const Home = () => {
  const featuredVehicles = [
    { id: 1, name: 'Yasir X-SUV', type: 'SUV', image: suvImg, price: '$85,000' },
    { id: 2, name: 'Yasir S-Executive', type: 'Sedan', image: sedanImg, price: '$72,000' },
    { id: 3, name: 'Yasir E-Vision', type: 'EV', image: evImg, price: '$95,000' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img src={heroImg} alt="Yasir Hero" className="hero-bg" />
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <span className="hero-badge">Next Generation Performance</span>
            <h1>Unleash the <br /><span className="gradient-text">Future of Driving</span></h1>
            <p>Experience the perfect fusion of luxury, power, and innovation. Designed for those who demand more from every mile.</p>
            <div className="hero-btns">
              <Link to="/vehicles" className="btn-primary">
                Explore Inventory <ArrowRight size={20} />
              </Link>
              <Link to="/test-drive" className="btn-outline">
                Book a Test Drive
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats container">
        <div className="stats-grid">
          {[
            { label: 'Top Speed', value: '320 km/h' },
            { label: '0-100 km/h', value: '2.4s' },
            { label: 'Range', value: '650+ km' },
            { label: 'Horsepower', value: '1200 hp' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="stat-card glass"
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="subtitle">Our Fleet</span>
              <h2>Featured <span className="gradient-text">Vehicles</span></h2>
            </div>
            <Link to="/vehicles" className="view-all">
              View All Models <ChevronRight size={20} />
            </Link>
          </div>

          <div className="vehicle-grid">
            {featuredVehicles.map((vehicle, i) => (
              <motion.div 
                key={vehicle.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="vehicle-card glass-card"
              >
                <div className="vehicle-img-wrapper">
                  <img src={vehicle.image} alt={vehicle.name} />
                </div>
                <div className="vehicle-info">
                  <span className="vehicle-type">{vehicle.type}</span>
                  <h3>{vehicle.name}</h3>
                  <div className="vehicle-footer">
                    <span className="price">Starting at {vehicle.price}</span>
                    <Link to={`/vehicles/${vehicle.id}`} className="details-link">Details</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Highlights */}
      <section className="premium-features section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">Future of Mobility</span>
            <h2>Experience the <span className="gradient-text">Premium Difference</span></h2>
          </div>
          <div className="features-grid">
            <div className="glass-card text-center">
              <Rotate3d size={40} className="accent-text" />
              <h3>360° Visualizer</h3>
              <p>Interact with our models in high-fidelity 3D before you visit.</p>
            </div>
            <div className="glass-card text-center">
              <Smartphone size={40} className="accent-text" />
              <h3>AR Showroom</h3>
              <p>Project your favorite Yasir model into your own driveway.</p>
            </div>
            <div className="glass-card text-center">
              <Calculator size={40} className="accent-text" />
              <h3>Smart Tools</h3>
              <p>Calculate EV savings and financing with real-time PKR rates.</p>
            </div>
            <div className="glass-card text-center">
              <MessageSquare size={40} className="accent-text" />
              <h3>AI Assistant</h3>
              <p>24/7 automated support for all your automotive inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="featured-vehicles section-padding bg-alt">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <Zap size={40} className="feature-icon" />
              <h3>Pure Power</h3>
              <p>Cutting-edge engine technology delivering unmatched performance and efficiency.</p>
            </div>
            <div className="feature-item">
              <Shield size={40} className="feature-icon" />
              <h3>Advanced Safety</h3>
              <p>5-star safety ratings with AI-driven collision avoidance systems.</p>
            </div>
            <div className="feature-item">
              <Award size={40} className="feature-icon" />
              <h3>Premium Comfort</h3>
              <p>Hand-crafted interiors using the finest sustainable materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section-padding">
        <div className="container">
          <div className="cta-box glass">
            <h2>Ready to take the wheel?</h2>
            <p>Join thousands of satisfied owners and experience Yasir Motors today.</p>
            <div className="cta-btns">
              <Link to="/test-drive" className="btn-primary">Book a Test Drive</Link>
              <Link to="/contact" className="btn-outline">Talk to an Expert</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
