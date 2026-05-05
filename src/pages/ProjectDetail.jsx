import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code, CheckCircle2, Cpu } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="section container" style={{ textAlign: 'center', paddingTop: '10rem' }}>
        <h2>Project Not Found</h2>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="section" style={{ paddingTop: '8rem' }}>
      <div className="container">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ marginBottom: '3rem' }}
        >
          <Link
            to="/"
            state={{ scrollTo: 'projects' }}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-secondary)', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              cursor: 'pointer',
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <ArrowLeft size={20} /> Back to Projects
          </Link>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left Column: Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-panel" style={{ padding: '0.5rem', overflow: 'hidden', marginBottom: '2rem' }}>
              <img 
                src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`} 
                alt={project.title} 
                style={{ width: '100%', borderRadius: '0.5rem', display: 'block' }} 
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {project.screenshots?.map((shot, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '0.5rem' }}>
                  <img 
                    src={`${import.meta.env.BASE_URL}${shot.startsWith('/') ? shot.slice(1) : shot}`} 
                    alt={`${project.title} screenshot ${idx + 1}`} 
                    style={{ width: '100%', borderRadius: '0.3rem' }} 
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', textAlign: 'left' }}>{project.title}</h1>

            <section style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: 'var(--accent-color)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>Overview</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                {project.fullDescription}
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: 'var(--accent-color)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>Problem Solved</h3>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                <CheckCircle2 style={{ color: 'var(--accent-color)', marginTop: '0.3rem', flexShrink: 0 }} size={24} />
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  {project.problemSolved}
                </p>
              </div>
            </section>

            <section>
              <h3 style={{ color: 'var(--accent-color)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>Tech Stack</h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {project.techStackDetails.map((tech, idx) => (
                  <div key={idx} className="glass-panel" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Cpu size={24} style={{ color: 'var(--accent-color)' }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>{tech.name}</h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{tech.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>

        {/* Contact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            marginTop: '8rem', 
            textAlign: 'center', 
            padding: '5rem 2rem',
            background: 'linear-gradient(135deg, rgba(18, 194, 233, 0.05) 0%, rgba(196, 113, 237, 0.05) 100%)',
            borderRadius: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '300px', height: '300px', background: 'var(--accent-color)', filter: 'blur(120px)', opacity: 0.1 }} />
          <div style={{ position: 'absolute', bottom: '-50%', right: '-20%', width: '300px', height: '300px', background: '#C471ED', filter: 'blur(120px)', opacity: 0.1 }} />

          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Interested in a similar project?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Let's discuss how I can help you build something equally impactful and modern.
          </p>
          
          <Link 
            to="/" 
            state={{ scrollTo: 'contact' }}
            className="btn btn-primary" 
            style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
          >
            Start a Conversation
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          h2 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
