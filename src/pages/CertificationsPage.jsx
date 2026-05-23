import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, ExternalLink, FileText } from 'lucide-react';
import { certifications } from '../data/certifications';

const CertificationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
      <div className="container">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ marginBottom: '3rem' }}
        >
          <Link
            to="/"
            state={{ scrollTo: 'certifications' }}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-secondary)', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              cursor: 'pointer',
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ marginBottom: '1rem', display: 'inline-block' }}>All Certifications</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Academic and industry-recognized achievements
          </p>
        </motion.div>

        {/* Grid of Certifications */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
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
                height: '180px', 
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
                    e.currentTarget.style.scale = '1.1';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.scale = '1';
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
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ 
                  fontSize: '1rem', 
                  marginBottom: '1.5rem', 
                  lineHeight: '1.4',
                  color: 'var(--text-primary)',
                  fontWeight: '500',
                  minHeight: '2.8rem'
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
                    padding: '0.6rem 1rem', 
                    fontSize: '0.85rem',
                    width: '100%',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <FileText size={16} /> View Certificate <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
