import { motion } from 'framer-motion';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                overflow: 'hidden',
                padding: 0,
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Image Container */}
              <Link to={`/project/${project.id}`} style={{ display: 'block', overflow: 'hidden' }}>
                <div style={{ 
                  width: '100%', 
                  height: '200px', 
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.05)'
                }}>
                  <motion.img
                    src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`}
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                    }}
                  />
                  {/* Fallback Placeholder */}
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(18, 194, 233, 0.1), rgba(196, 113, 237, 0.1))',
                    color: 'rgba(255, 255, 255, 0.3)',
                    fontSize: '0.9rem',
                    gap: '0.5rem'
                  }}>
                    <div style={{ width: '40px', height: '40px', border: '2px dashed rgba(255, 255, 255, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      +
                    </div>
                    <span>Place Screenshot Here</span>
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(10, 10, 20, 0.8), transparent)',
                    pointerEvents: 'none'
                  }} />
                </div>
              </Link>

              {/* Content Container */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  marginBottom: '0.75rem', 
                  color: 'var(--text-primary)',
                  fontWeight: '600'
                }}>{project.title}</h3>
                
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: '1.25rem', 
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  flex: 1 
                }}>{project.shortDescription}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.techStack.map(tag => (
                    <span key={tag} style={{ 
                      fontSize: '0.75rem', 
                      color: 'var(--accent-color)', 
                      background: 'rgba(18, 194, 233, 0.1)', 
                      padding: '0.2rem 0.75rem', 
                      borderRadius: '1rem',
                      border: '1px solid rgba(18, 194, 233, 0.2)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '1rem'
                }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={project.github} className="project-link" title="Source Code">
                      <Code size={18} />
                    </a>
                    <a href={project.link} className="project-link" title="Live Demo">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  
                  <Link to={`/project/${project.id}`} className="view-details">
                    <span>Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Ask AI Card */}
          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: projects.length * 0.1 }}
            onClick={() => window.dispatchEvent(new CustomEvent('open-ai'))}
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              border: '2px dashed rgba(18, 194, 233, 0.3)',
              cursor: 'pointer',
              background: 'rgba(18, 194, 233, 0.02)',
              minHeight: '400px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{ 
              scale: 1.02, 
              borderColor: 'rgba(18, 194, 233, 0.6)',
              background: 'rgba(18, 194, 233, 0.05)'
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              boxShadow: '0 10px 20px rgba(18, 194, 233, 0.3)'
            }}>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Code size={40} color="white" />
              </motion.div>
            </div>
            
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Looking for something specific?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              My AI Assistant can tell you about my ERP system, SaaS projects, or AI integrations in detail.
            </p>
            
            <button className="btn btn-primary" style={{ padding: '0.75rem 2rem', borderRadius: '1rem' }}>
              Ask My AI
            </button>

            {/* Decorative Sparkles */}
            <div style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.3 }}>
              <Code size={100} style={{ transform: 'rotate(15deg)', color: 'var(--accent-color)' }} />
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .project-link {
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .project-link:hover {
          color: var(--accent-color);
          transform: translateY(-2px);
        }
        .view-details {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--accent-color);
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: gap 0.3s ease;
        }
        .view-details:hover {
          gap: 0.7rem;
        }
      `}</style>
    </section>
  );
};

export default Projects;
