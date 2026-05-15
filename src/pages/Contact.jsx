import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header section-padding">
        <div className="container">
          <span className="subtitle">Get In Touch</span>
          <h1>Contact <span className="gradient-text">Yasir Motors</span></h1>
          <p>Our experts are here to assist you with any inquiries regarding our vehicles or services.</p>
        </div>
      </div>

      <div className="container contact-grid">
        <div className="contact-info">
          <div className="info-card glass">
            <div className="info-item">
              <div className="icon-wrapper"><MapPin /></div>
              <div>
                <h3>Global Headquarters</h3>
                <p>123 Karachi Pakistan</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-wrapper"><Phone /></div>
              <div>
                <h3>Call Us</h3>
                <p>Sales: +923451234567</p>
                <p>Service: +923451234567</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-wrapper"><Mail /></div>
              <div>
                <h3>Email Inquiries</h3>
                <p>info@yasirmotors.com</p>
                <p>press@yasirmotors.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-wrapper"><Clock /></div>
              <div>
                <h3>Business Hours</h3>
                <p>Mon - Sat: 09:00 AM - 08:00 PM</p>
                <p>Sunday: 10:00 AM - 04:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container glass-card">
          <h2>Send us a <span className="gradient-text">Message</span></h2>
          <form className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <select>
                <option>General Inquiry</option>
                <option>Sales & Inventory</option>
                <option>Service Booking</option>
                <option>Partnership</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="How can we help you?"></textarea>
            </div>
            <button className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="map-section container section-padding">
        <div className="map-placeholder glass-card">
          <div className="map-overlay">
            <MapPin size={48} className="map-icon" />
            <h3>Visit our Showroom</h3>
            <p>Interactive Map Simulation</p>
            <button className="btn-outline">Open in Google Maps</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
