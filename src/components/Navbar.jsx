import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Abir Hachlafi Logo"
          style={{ height: '55px', width: 'auto', objectFit: 'contain' }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)', display: 'none' }}>
          AH.
        </span>
      </div>
      <div className="desktop-nav" style={{ display: 'flex', gap: '2rem' }}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.9rem',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            {link.name}
          </a>
        ))}
      </div>

      <div 
        className="mobile-nav-btn" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer', color: 'var(--text-primary)', zIndex: 60 }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(5, 5, 5, 0.95)',
              backdropFilter: 'blur(10px)',
              borderBottom: '1px solid var(--border-color)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '1.2rem',
                  transition: 'color 0.3s ease',
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
