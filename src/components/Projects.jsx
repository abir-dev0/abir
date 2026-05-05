import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Peak Online Library Web App',
      description: 'An e-commerce platform that allows users to browse, search, and purchase books. Includes secure authentication, a shopping cart, and an admin dashboard for inventory management.',
      tags: ['React.js', 'Laravel', 'MySQL'],
      link: '#',
      github: '#'
    },
    {
      title: 'Minibus Rental System - MVR',
      description: 'A web application for managing minibus reservations with a user-friendly interface. Includes a booking calendar, price calculation, vehicle availability tracking, and an admin panel to manage vehicles, users, and routes.',
      tags: ['React.js', 'Tailwind CSS'],
      link: '#',
      github: '#'
    },
    {
      title: 'Document Management System',
      description: 'A secure document management system with different user roles (anonymous, authenticated, and admin). The application allows file upload/download, search with filtering, and pagination for easy access to documents.',
      tags: ['Python', 'Django'],
      link: '#',
      github: '#'
    },
    {
      title: 'Sign Language Real-Time Translation',
      description: 'Developed a real-time sign language translation system using CNNs to recognize hand gestures and convert them into words and sentences. Implemented a computer vision pipeline for real-time prediction, improving accessibility for deaf users.',
      tags: ['Python', 'TensorFlow/PyTorch', 'OpenCV', 'CNN'],
      link: '#',
      github: '#'
    },
    {
      title: 'AI Literature Review Assistant',
      description: 'Built an intelligent assistant to automate literature reviews and identify research gaps from scientific papers. The system is based on a multi-agent architecture (SMA).',
      tags: ['Python', 'NLP methods', 'n8n', 'LLMs'],
      link: '#',
      github: '#'
    },
    {
      title: 'Modern Data Lakehouse Platform',
      description: 'Designed a Data Lakehouse architecture with an end-to-end data pipeline and a Machine Learning-based smart pricing model. Enabled scalable data processing and analytics.',
      tags: ['Python', 'Spark', 'SQL', 'Data Lakehouse', 'ML'],
      link: '#',
      github: '#'
    },
    {
      title: 'Weather Data Pipeline',
      description: 'Developed a data pipeline for collecting and analyzing weather data using both on-premise and Snowflake cloud architectures. Supported data-driven decision-making through ETL and analytics.',
      tags: ['Python', 'APIs', 'ETL', 'Snowflake', 'SQL'],
      link: '#',
      github: '#'
    }
  ];

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.8rem', color: 'var(--accent-color)', background: 'rgba(18, 194, 233, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '1rem' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <a href={project.github} style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                  <Code size={20} />
                </a>
                <a href={project.link} style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
