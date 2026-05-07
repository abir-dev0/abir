import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '4rem' }}>
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px' }}
        >

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '4.5rem',
              fontWeight: '100',
              lineHeight: '1.1',
              marginBottom: '1rem',
              letterSpacing: '-2px'
            }}
          >
            Abir <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Hachlafi</span>
          </motion.h1>

          <motion.div
            style={{
              textAlign: 'left',
              color: 'var(--text-primary)',
              marginBottom: '2rem',
              fontSize: '1.8rem',
              fontWeight: '100',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'Creative Developer', 1000,
                'Passionate Coder', 1000,
                'Problem Solver', 1000,
                'AI & Web Builder', 1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </motion.div>

          <motion.p
            style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.15rem', maxWidth: '550px', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I turn your ideas into real, modern websites built with clean design, strong performance, and a focus on helping your business grow online.          </motion.p>

          <motion.div
            style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 2rem', borderRadius: '1rem' }} onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Start a Project <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </a>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.linkedin.com/in/abirhachlafi/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="floating"
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Decorative Elements */}
          <div style={{ position: 'absolute', top: '10%', right: '10%', width: '100px', height: '100px', background: 'var(--accent-color)', filter: 'blur(80px)', opacity: 0.2, zIndex: 0 }} />
          <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '120px', height: '120px', background: '#C471ED', filter: 'blur(80px)', opacity: 0.2, zIndex: 0 }} />

          <div style={{
            width: '400px',
            height: '400px',
            borderRadius: '2rem',
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 1,
            transform: 'rotate(-3deg)'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
            }}>
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Abir Hachlafi"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400?text=Abir+Hachlafi';
                }}
              />
              {/* Image Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(5, 5, 5, 0.6))'
              }} />
            </div>

            {/* Tech Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--accent-gradient)', padding: '0.75rem 1.25rem', borderRadius: '1rem', color: 'white', fontWeight: '400', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', }}
            >
              Full-Stack
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{ position: 'absolute', bottom: '20px', left: '-30px', background: 'rgba(5, 5, 5, 0.8)', border: '1px solid var(--accent-color)', padding: '0.75rem 1.25rem', borderRadius: '1rem', color: 'var(--accent-color)', fontWeight: '400', backdropFilter: 'blur(10px)' }}
            >
              AI & Data
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .social-icon {
          width: 50px;
          height: 50px;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .social-icon:hover {
          background: rgba(255, 255, 255, 0.08);
          color: var(--accent-color);
          border-color: var(--accent-color);
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 3rem !important;
          }
          div[style*="width: 400px"] {
            width: 300px !important;
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
