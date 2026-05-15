import { MapPin, Phone, Clock, Search, Navigation, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Dealers.css';

const Dealers = () => {
  const dealers = [
    { name: 'Yasir Flagship - Karachi', address: '123 Karachi Pakistan', phone: '+923451234567', hours: '09:00 AM - 08:00 PM' },
    { name: 'Yasir Downtown Experience - Lahore', address: 'Main Blvd, Gulberg, Lahore', phone: '+923451234567', hours: '10:00 AM - 09:00 PM' },
    { name: 'Yasir Coastal Hub - Gwadar', address: 'Marine Drive, Gwadar', phone: '+923451234567', hours: '09:00 AM - 07:00 PM' },
    { name: 'Yasir North Service Center - Islamabad', address: 'I-9 Sector, Islamabad', phone: '+923451234567', hours: '08:00 AM - 06:00 PM' },
  ];

  return (
    <div className="dealers-page">
      <div className="page-header section-padding">
        <div className="container">
          <span className="subtitle">Find Us</span>
          <h1>Our <span className="gradient-text">Showrooms</span></h1>
          <p>Visit our experience centers to see our fleet and speak with our experts.</p>
        </div>
      </div>

      <div className="container dealers-content section-padding">
        <div className="dealers-layout">
          <div className="dealers-list">
            <div className="search-widget glass">
              <Search size={20} />
              <input type="text" placeholder="Enter city or zip code..." />
            </div>

            <div className="dealer-cards">
              {dealers.map((dealer, i) => (
                <div key={i} className="dealer-card glass-card">
                  <h3>{dealer.name}</h3>
                  <div className="dealer-info">
                    <div className="info-item">
                      <MapPin size={16} />
                      <span>{dealer.address}</span>
                    </div>
                    <div className="info-item">
                      <Phone size={16} />
                      <span>{dealer.phone}</span>
                    </div>
                    <div className="info-item">
                      <Clock size={16} />
                      <span>{dealer.hours}</span>
                    </div>
                  </div>
                  <div className="dealer-actions">
                    <button className="btn-primary-sm"><Navigation size={14} /> Get Directions</button>
                    <Link to="/test-drive" className="btn-primary-sm">
                      <CalendarCheck size={16} /> Book Appointment
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dealers-map glass">
             <div className="map-placeholder-content">
                <MapPin size={48} className="map-icon" />
                <h3>Interactive Dealer Map</h3>
                <p>Select a showroom to see its location on the map.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dealers;
