import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ textAlign: 'center' }}>About Me</h2>
          <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              I am a Computer Engineering student specializing in Artificial Intelligence and Data at the Moroccan School of Engineering Sciences (EMSI), with a strong foundation in full-stack web development.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              I have hands-on experience in building robust web applications using JavaScript, React.js, Node.js, Laravel, Django, and Python. I am also proficient in managing both SQL and NoSQL databases. Furthermore, my skill set includes developing Machine Learning models and building efficient REST APIs. I thrive in bridging the gap between intelligent algorithms and modern, responsive user interfaces.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
