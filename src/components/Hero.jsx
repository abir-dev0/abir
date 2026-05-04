import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px' }}
        >
          <motion.h4
            style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Abir Hachlafi
          </motion.h1>
          <motion.h2
            style={{ textAlign: 'left', color: 'var(--text-secondary)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Data in ', 1000,
                'Intelligence out', 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', paddingRight: '5px' }}
            />
          </motion.h2>
          <motion.p
            style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Where others see concepts, I see execution and I make it happen.
          </motion.p>

          <motion.div
            style={{ display: 'flex', gap: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary">
              <Mail size={20} /> Contact Me
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="floating"
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            padding: '2px',
            background: 'var(--accent-gradient)',
            position: 'relative',
          }}>
            <img
              src="/profile.jpg"
              alt="Abir Hachlafi"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                background: 'var(--surface-color)'
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/350?text=Profile+Image';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
