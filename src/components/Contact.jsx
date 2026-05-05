import { motion } from 'framer-motion';
import { Mail, Phone, User, MessageSquare, Clock, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ paddingBottom: '10rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '1.5rem' }}
          >
            Let’s Work Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2.5rem' }}
          >
            Have a project in mind or need a website for your business? <br />
            I can help you turn your idea into a clean, modern, and functional website.
          </motion.p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                padding: '0.75rem 1.5rem', 
                background: 'rgba(18, 194, 233, 0.05)', 
                borderRadius: '2rem',
                border: '1px solid rgba(18, 194, 233, 0.2)',
                fontSize: '0.95rem',
                color: 'var(--text-primary)'
              }}
            >
              <Sparkles size={18} style={{ color: 'var(--accent-color)' }} />
              <span>I can guide you from start to finish</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                padding: '0.75rem 1.5rem', 
                background: 'rgba(196, 113, 237, 0.05)', 
                borderRadius: '2rem',
                border: '1px solid rgba(196, 113, 237, 0.2)',
                fontSize: '0.95rem',
                color: 'var(--text-primary)'
              }}
            >
              <Clock size={18} style={{ color: 'var(--accent-color)' }} />
              <span>Usually reply within a few hours</span>
            </motion.div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Email */}
          <motion.a
            href="mailto:abirhachlafi1@gmail.com"
            className="glass-panel contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '2.5rem',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            <div className="contact-icon-wrapper">
              <Mail size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Email</h3>
            <span style={{ color: 'var(--text-secondary)' }}>abirhachlafi1@gmail.com</span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+212777252784"
            className="glass-panel contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '2.5rem',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            <div className="contact-icon-wrapper">
              <Phone size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Phone</h3>
            <span style={{ color: 'var(--text-secondary)' }}>+212 777-252784</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/abir-hachlafi-b85101336/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '2.5rem',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            <div className="contact-icon-wrapper">
              <User size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>LinkedIn</h3>
            <span style={{ color: 'var(--text-secondary)' }}>Connect on LinkedIn</span>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
        </motion.div>
      </div>

      <style jsx>{`
        .contact-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }
        .contact-card:hover {
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: var(--accent-color) !important;
        }
        .contact-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(18, 194, 233, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          transition: all 0.3s ease;
        }
        .contact-card:hover .contact-icon-wrapper {
          background: var(--accent-gradient);
          color: white;
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </section>
  );
};

export default Contact;
