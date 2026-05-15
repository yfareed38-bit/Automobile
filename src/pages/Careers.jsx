import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import './Careers.css';

const Careers = () => {
  const jobs = [
    { title: 'Senior EV Powertrain Engineer', location: 'California, USA', type: 'Full-time', dept: 'Engineering' },
    { title: 'UX Designer - Automotive Systems', location: 'Remote / Berlin', type: 'Full-time', dept: 'Design' },
    { title: 'Sales Consultant', location: 'London, UK', type: 'Full-time', dept: 'Sales' },
    { title: 'Data Scientist (AI Pilot)', location: 'California, USA', type: 'Full-time', dept: 'Software' },
  ];

  return (
    <div className="careers-page">
      <div className="page-header section-padding">
        <div className="container">
          <span className="subtitle">Join the Revolution</span>
          <h1>Work at <span className="gradient-text">Titan Motors</span></h1>
          <p>Help us shape the future of mobility. We are looking for dreamers and doers.</p>
        </div>
      </div>

      <section className="jobs-section container section-padding">
        <div className="section-header">
          <h2>Open <span className="gradient-text">Positions</span></h2>
        </div>
        <div className="jobs-list">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="job-card glass"
            >
              <div className="job-info">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span><MapPin size={16} /> {job.location}</span>
                  <span><Briefcase size={16} /> {job.dept}</span>
                  <span><Clock size={16} /> {job.type}</span>
                </div>
              </div>
              <button className="apply-btn">
                Apply Now <ArrowUpRight size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="perks section-padding bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why <span className="gradient-text">Titan?</span></h2>
          </div>
          <div className="perks-grid">
            <div className="perk-card glass-card">
              <h3>Innovation First</h3>
              <p>Work on technologies that don't exist yet.</p>
            </div>
            <div className="perk-card glass-card">
              <h3>Global Culture</h3>
              <p>A diverse team from over 40 countries.</p>
            </div>
            <div className="perk-card glass-card">
              <h3>Health & Wellness</h3>
              <p>Comprehensive health plans and gym memberships.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
