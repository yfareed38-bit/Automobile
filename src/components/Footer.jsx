import { Link } from 'react-router-dom';
import { Car, Globe, Send, Camera, Users, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo">
              <div className="logo-icon">
                <Car size={24} />
              </div>
              <span className="logo-text">YASIR <span className="logo-accent">MOTORS</span></span>
            </Link>
            <p className="footer-desc">
              Pushing the boundaries of automotive excellence. Experience the future of driving with Yasir Motors.
            </p>
            <div className="social-links">
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Send size={20} /></a>
              <a href="#"><Camera size={20} /></a>
              <a href="#"><Users size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/vehicles">Inventory</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/financing">Financing</Link></li>
              <li><Link to="/dealers">Dealers</Link></li>
              <li><Link to="/test-drive">Book Test Drive</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">News & Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <MapPin size={20} className="contact-icon" />
              <span>123 Karachi Pakistan</span>
            </div>
            <div className="contact-item">
              <Phone size={20} className="contact-icon" />
              <span>+923451234567</span>
            </div>
            <div className="contact-item">
              <Mail size={20} className="contact-icon" />
              <span>info@yasirmotors.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Yasir Motors. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
