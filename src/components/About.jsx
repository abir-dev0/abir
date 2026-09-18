import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>About Me</h2>

          <div className="glass-panel" style={{
            padding: '3rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              color: 'var(--accent-color)',
              marginBottom: '2rem',
              fontWeight: '600'
            }}>
              I build at the intersection of Artificial Intelligence, Data, and Software Engineering
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '2px', background: 'var(--accent-gradient)', opacity: 0.3 }} />

              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '750px' }}>
As an AI & Data Engineering student, I enjoy turning complex ideas into useful applications, from machine learning models and LLM-powered solutions to full-stack products. I’m driven by curiosity, continuous learning, and the challenge of building things that actually make an impact.              </p>
               <div style={{
                marginTop: '1rem',
                padding: '1.5rem 2rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '1rem',
                border: '1px solid rgba(18, 194, 233, 0.1)',
                color: 'var(--text-primary)',
                fontSize: '1.1rem',
                fontWeight: '500',
                maxWidth: '700px'
              }}>
                "Whether you need a full-stack web application or an AI-powered system, I can help you design and build a scalable, efficient, and user-focused solution."
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
