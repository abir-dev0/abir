import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ marginBottom: '1rem' }}>Professional Certifications</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Academic and industry-recognized achievements</p>
        </motion.div>

        {/* Moving Marquee Container */}
        <div className="marquee-container">
          <div className="marquee-track">
            {/* Double the array for infinite scrolling */}
            {[...certifications, ...certifications].map((cert, index) => (
              <div key={index} className="marquee-item">
                <div
                  className="glass-panel"
                  style={{
                    padding: '0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    position: 'relative'
                  }}
                >
                  {/* Image Container */}
                  <div style={{ 
                    width: '100%', 
                    height: '160px', 
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.02)'
                  }}>
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        opacity: 0.8,
                        transition: 'all 0.5s ease'
                      }}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x250?text=Certification';
                        e.target.style.opacity = 0.3;
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.opacity = '0.8';
                      }}
                    />
                    <div style={{ 
                      position: 'absolute', 
                      top: '1rem', 
                      right: '1rem', 
                      background: 'var(--accent-gradient)', 
                      padding: '0.5rem', 
                      borderRadius: '50%',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                    }}>
                      <Award size={18} color="white" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ 
                      fontSize: '0.9rem', 
                      marginBottom: '1.25rem', 
                      lineHeight: '1.4',
                      color: 'var(--text-primary)',
                      fontWeight: '500',
                      minHeight: '2.5rem'
                    }}>
                      {cert.name}
                    </h3>
                    
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ 
                        marginTop: 'auto', 
                        padding: '0.5rem 1rem', 
                        fontSize: '0.8rem',
                        width: '100%',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <FileText size={14} /> View Certificate <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button to see all certifications page */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
          <Link
            to="/certifications"
            className="btn btn-primary"
            style={{
              padding: '0.8rem 2rem',
              fontSize: '0.95rem',
              fontWeight: '500',
              borderRadius: '0.75rem',
              boxShadow: '0 0 20px rgba(233, 179, 251, 0.3)',
              textDecoration: 'none'
            }}
          >
            See all certifications
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
