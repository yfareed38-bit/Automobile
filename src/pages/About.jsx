import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header section-padding">
        <div className="container">
          <span className="subtitle">Our Story</span>
          <h1>Defining <span className="gradient-text">Excellence</span></h1>
          <p>Over two decades of innovation in the automotive industry.</p>
        </div>
      </div>
      <section className="about-content container section-padding">
        <div className="about-grid">
          <div className="glass-card">
            <h2>Our Mission</h2>
            <p>To redefine the relationship between humans and machines through sustainable innovation and uncompromising luxury.</p>
          </div>
          <div className="glass-card">
            <h2>Our Vision</h2>
            <p>A world where performance and ecology coexist in perfect harmony, powered by Titan's next-gen propulsion systems.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
