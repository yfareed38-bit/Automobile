import { motion } from 'framer-motion';
import { Calendar, MapPin, Car, User, Mail, Phone, ChevronRight } from 'lucide-react';
import './TestDrive.css';

const TestDrive = () => {
  return (
    <div className="test-drive-page">
      <div className="page-header section-padding">
        <div className="container">
          <span className="subtitle">First Hand Experience</span>
          <h1>Book an <span className="gradient-text">Appointment</span></h1>
          <p>Schedule a test drive or service consultation with our experts.</p>
        </div>
      </div>

      <section className="booking-container container section-padding">
        <div className="booking-grid glass-card">
          <div className="booking-form-side">
            <h2>Reserve Your <span className="gradient-text">Slot</span></h2>
            <form className="td-form">
              <div className="form-section">
                <h3>1. Select Vehicle</h3>
                <div className="vehicle-selector">
                   <select>
                      <option>Select Model</option>
                      <option>Yasir X-SUV</option>
                      <option>Yasir S-Executive</option>
                      <option>Yasir E-Vision</option>
                      <option>Yasir Sport-GTR</option>
                   </select>
                </div>
              </div>

              <div className="form-section">
                <h3>2. Preferred Schedule</h3>
                <div className="form-row">
                  <div className="input-with-icon">
                    <Calendar size={18} />
                    <input type="date" />
                  </div>
                  <div className="input-with-icon">
                    <MapPin size={18} />
                    <select>
                      <option>Select Location</option>
                      <option>Main Showroom (Silicon Valley)</option>
                      <option>Downtown Experience Center</option>
                      <option>Coastal Service Hub</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>3. Contact Details</h3>
                <div className="form-row">
                  <div className="input-with-icon">
                    <User size={18} />
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div className="input-with-icon">
                    <Mail size={18} />
                    <input type="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="input-with-icon full-width">
                  <Phone size={18} />
                  <input type="tel" placeholder="Phone Number" />
                </div>
              </div>

              <button className="btn-primary w-full td-submit">
                Book Test Drive <ChevronRight size={20} />
              </button>
            </form>
          </div>

          <div className="booking-info-side">
            <div className="info-block">
              <h3>What to bring?</h3>
              <ul>
                <li>Valid Driver's License</li>
                <li>Proof of Insurance (Optional)</li>
                <li>Your passion for driving</li>
              </ul>
            </div>
            <div className="info-block">
              <h3>What to expect?</h3>
              <p>A 30-minute personalized driving session with our product specialist to guide you through all the features.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestDrive;
