import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Compare', path: '/compare' },
    { name: 'Tools', path: '/tools' },
    { name: 'Services', path: '/services' },
    { name: 'Financing', path: '/financing' },
    { name: 'Dealers', path: '/dealers' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <Car size={24} />
          </div>
          <span className="logo-text">YASIR <span className="logo-accent">MOTORS</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/test-drive" className="btn-primary nav-btn">
            Book Test Drive
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-menu-mobile ${isOpen ? 'nav-menu-mobile-open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/test-drive" className="btn-primary" onClick={() => setIsOpen(false)}>
          Book Test Drive
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
