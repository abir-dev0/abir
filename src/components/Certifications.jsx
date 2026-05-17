import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { 
      name: 'The Unix Workbench – Johns Hopkins University (Linux)', 
      file: `${import.meta.env.BASE_URL}certs/cert1.pdf`,
      image: `${import.meta.env.BASE_URL}certs/cert1.jpg`
    },
    { 
      name: 'Interactivity with JavaScript – University of Michigan', 
      file: `${import.meta.env.BASE_URL}certs/cert2.pdf`,
      image: `${import.meta.env.BASE_URL}certs/cert2.jpg`
    },
    { 
      name: 'Oriented Programming (C++) – EPFL', 
      file: `${import.meta.env.BASE_URL}certs/cert3.pdf`,
      image: `${import.meta.env.BASE_URL}certs/cert3.jpg`
    },
    { 
      name: 'La recherche documentaire - Ecole Polytechnique', 
      file: `${import.meta.env.BASE_URL}certs/cert4.pdf`,
      image: `${import.meta.env.BASE_URL}certs/cert4.jpg`
    },
    { 
      name: 'Python for Data Science, AI & Development - IBM', 
      file: `${import.meta.env.BASE_URL}certs/cert5.pdf`,
      image: `${import.meta.env.BASE_URL}certs/cert5.jpg`
    },
    { 
      name: 'Software Engineering: Design & Management - HKUST', 
      file: `${import.meta.env.BASE_URL}certs/cert6.pdf`,
      image: `${import.meta.env.BASE_URL}certs/cert6.jpg`
    },
    { 
      name: 'React Basics - Meta', 
      file: `${import.meta.env.BASE_URL}certs/cert7.pdf`,
      image: `${import.meta.env.BASE_URL}certs/cert7.jpg`
    },
    { 
      name: 'React Native - Meta', 
      file: `${import.meta.env.BASE_URL}certs/cert8.pdf`,
      image: `${import.meta.env.BASE_URL}certs/cert8.jpg`
    },
    {
      name: "Agile Project Management",
      file: `${import.meta.env.BASE_URL}certs/cert9.pdf`,
      image: `${import.meta.env.BASE_URL}certs/cert9.jpg`
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ marginBottom: '1rem' }}>Professional Certifications</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Academic and industry-recognized achievements</p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
    </section>
  );
};

export default Certifications;
