import { motion } from 'framer-motion';

const Experience = () => {
  const education = [
    {
      period: '2024-2027 (In Progress)',
      degree: 'Engineering Degree in AI and Data Science',
      institution: 'EMSI – Moroccan School of Engineering Sciences'
    },
    {
      period: '2022-2024',
      degree: 'Specialized Technician Diploma in Full-Stack Web',
      institution: 'ISTA – Institute of Applied Sciences and Technologies'
    },
    {
      period: '2021-2022',
      degree: 'Scientific Baccalaureate - Physics Option',
      institution: 'High School'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'var(--border-color)'
          }} />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                position: 'relative',
                paddingLeft: '60px',
                marginBottom: '3rem'
              }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '11px',
                top: '5px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--accent-color)',
                boxShadow: '0 0 10px var(--accent-color)'
              }} />
              
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                  {item.period}
                </span>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{item.degree}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{item.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
