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
              Turning Ideas into Digital Reality
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '750px' }}>
I’m a full-stack web developer passionate about building modern, scalable applications that combine clean design with strong functionality and user experience.              </p>
              
              <div style={{ width: '50px', height: '2px', background: 'var(--accent-gradient)', opacity: 0.3 }} />

              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '750px' }}>
Alongside web development, I am actively learning Artificial Intelligence and exploring how to integrate AI models into real-world applications. I enjoy working at the intersection of software engineering and intelligent systems.                            
</p>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '750px' }}>
I specialize in building full-stack applications and AI-powered systems. My work involves developing backend systems, designing APIs, and creating responsive frontend interfaces using modern web technologies.              </p>

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
