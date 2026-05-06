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
                I’m a full-stack web developer passionate about building modern, high-quality websites that help businesses grow online. My focus is on creating clean, fast, and user-friendly digital experiences that deliver real value.
              </p>
              
              <div style={{ width: '50px', height: '2px', background: 'var(--accent-gradient)', opacity: 0.3 }} />

              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '750px' }}>
                I specialize in building websites for <strong>businesses, personal brands, and clothing brands</strong> that want to strengthen their online presence and attract more customers.
              </p>

              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '750px' }}>
                Alongside web development, I’m deeply interested in <strong>AI and data-driven solutions</strong>. I can integrate smart features like chatbots, recommendations, and dashboards to make websites more interactive and intelligent.
              </p>

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
                "Whether you need a simple brochure website or a full-featured web application, I’m here to help you create a professional online presence that reflects your brand."
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
