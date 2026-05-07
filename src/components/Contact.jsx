import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, ArrowRight } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h2 style={{ fontSize: '3rem', fontWeight: '100', marginBottom: '1.5rem' }}>
            Let’s Start <span style={{ color: 'var(--accent-color)' }}>Something</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto' }}>
            Have a project in mind or need a website for your business?
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto' }}>
            I can help you turn your idea into a clean, modern, and functional website.
          </p>
        </motion.div>

        <div className="contact-container-modern">
          {/* Left Side: Enhanced 3D Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: 'spring' }}
            className="profile-visual-wrapper"
          >
            <div className="profile-main-container">
              {/* Rotating Decorative Ring */}
              <div className="profile-decorative-ring" />

              {/* Floating Glows */}
              <div className="glow-blob" style={{ background: 'var(--accent-color)', top: '-50px', left: '-50px', opacity: 0.3 }} />
              <div className="glow-blob" style={{ background: '#C471ED', bottom: '-50px', right: '-50px', opacity: 0.3 }} />

              <motion.div
                whileHover={{ rotateY: 15, rotateX: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="profile-frame-layered"
              >
                <div className="profile-card-stack">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Abir Hachlafi"
                    className="profile-img-styled"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/450'; }}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.4), transparent)' }} />
                </div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="experience-badge"
                >
                  <span>100%</span>
                  <span>Commitment</span>
                </motion.div>

                {/* Floating Tech Dots */}
                <div style={{ position: 'absolute', top: '20%', left: '-15px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-color)', boxShadow: '0 0 15px var(--accent-color)' }} />
                <div style={{ position: 'absolute', bottom: '20%', right: '-15px', width: '10px', height: '10px', borderRadius: '50%', background: '#C471ED', boxShadow: '0 0 15px #C471ED' }} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Form and Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-panel form-container"
              style={{ width: '100%' }}
            >

              <form
                action="https://formspree.io/f/xvzlrzly"
                method="POST"
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                <div className="form-group">
                  <label>Name</label>
                  <div className="input-wrapper">
                    <User size={18} className="input-icon" />
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <div className="input-wrapper">
                    <Mail size={18} className="input-icon" />
                    <input type="email" name="email" placeholder="email@example.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <div className="input-wrapper">
                    <MessageSquare size={18} className="input-icon" style={{ top: '1.25rem' }} />
                    <textarea name="message" placeholder="Tell me about your project..." rows="4" required></textarea>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </motion.div>

            {/* Social Circles Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="social-circles-row"
            >
              <a href="mailto:abirhachlafi1@gmail.com" className="social-circle" title="Email Me">
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/abirhachlafi/" target="_blank" rel="noopener noreferrer" className="social-circle" title="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
