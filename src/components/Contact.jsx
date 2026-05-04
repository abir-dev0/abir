import { motion } from 'framer-motion';
import { Mail, Phone, User, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ paddingBottom: '8rem' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center' }}>
          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ flex: '1 1 300px', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(18, 194, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
              <Mail size={30} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email</h3>
              <a href="mailto:abirhachlafi1@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e=>e.currentTarget.style.color='var(--accent-color)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>
                abirhachlafi1@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ flex: '1 1 300px', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(18, 194, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
              <Phone size={30} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Phone</h3>
              <a href="tel:+212777252784" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e=>e.currentTarget.style.color='var(--accent-color)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>
                +212 777-252784
              </a>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ flex: '1 1 300px', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(18, 194, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
              <User size={30} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/abir-hachlafi-b85101336/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e=>e.currentTarget.style.color='var(--accent-color)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
