import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { name: 'The Unix Workbench – Johns Hopkins University (Linux)', file: `${import.meta.env.BASE_URL}certs/cert1.pdf` },
    { name: 'Interactivity with JavaScript – University of Michigan', file: `${import.meta.env.BASE_URL}certs/cert2.pdf` },
    { name: 'Oriented Programming (C++) – EPFL', file: `${import.meta.env.BASE_URL}certs/cert3.pdf` },
    { name: 'La recherche documentaire - Ecole Polytechnique', file: `${import.meta.env.BASE_URL}certs/cert4.pdf` },
    { name: 'Python for Data Science, AI & Development - IBM', file: `${import.meta.env.BASE_URL}certs/cert5.pdf` },
    { name: 'Software Engineering: Software Design and Project Management - The Hong Kong University of Science and Technology', file: `${import.meta.env.BASE_URL}certs/cert6.pdf` },
    { name: 'React Basics - Meta', file: `${import.meta.env.BASE_URL}certs/cert7.pdf` },
    { name: 'React Native - Meta', file: `${import.meta.env.BASE_URL}certs/cert8.pdf` }

  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {certs.map((cert, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem 0',
                  borderBottom: index !== certs.length - 1 ? '1px solid var(--border-color)' : 'none'
                }}
              >
                <a 
                  href={cert.file} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)', width: '100%', transition: 'color 0.3s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >
                  <Award style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} size={24} />
                  <span style={{ fontSize: '1.1rem' }}>{cert.name}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
