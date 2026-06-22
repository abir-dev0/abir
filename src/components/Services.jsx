import { motion } from 'framer-motion';
import { Globe, Building2, Layout, Bot, Database, Server, Check, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Database size={32} />,
      title: 'Data Engineering & Analytics',
      description: 'Design and implementation of scalable Data Lakehouse platforms, ETL pipelines, and advanced data architectures for business intelligence.',
      features: ['ETL & Pipeline Orchestration', 'Cloud Data Warehousing', 'Medallion Architecture', 'Big Data Processing']
    },
    {
      icon: <Bot size={32} />,
      title: 'AI & Machine Learning',
      description: 'Intelligent systems leveraging Multi-Agent architectures, LLMs, and Machine Learning models to automate workflows and extract insights.',
      features: ['Multi-Agent Systems & LLMs', 'Predictive ML Models', 'Workflow Automation', 'NLP Document Processing']
    },
    {
      icon: <Building2 size={32} />,
      title: 'Full-Stack Enterprise Systems',
      description: 'Comprehensive business solutions and ERPs built to centralize operations, manage logistics, and streamline complex internal workflows.',
      features: ['ERP & Management Dashboards', 'Complex Database Design', 'Secure API Development', 'Business Analytics Reporting']
    },
    {
      icon: <Layout size={32} />,
      title: 'Modern Frontend Engineering',
      description: 'High-performance, visually striking web interfaces with advanced animations, dynamic styling, and optimized mobile-first experiences.',
      features: ['Interactive UI/UX Design', 'Advanced Animations', 'Lightning-fast Performance', 'Responsive Dashboards']
    },
    {
      icon: <Globe size={32} />,
      title: 'SaaS & Web Platforms',
      description: 'Scalable cloud-based platforms, community hubs, and e-commerce solutions featuring real-time data and secure transactions.',
      features: ['E-commerce Integration', 'User Community Features', 'Scalable Backend Architecture', 'Real-time Data Sync']
    },
    {
      icon: <Server size={32} />,
      title: 'API Development & Integration',
      description: 'Building robust, secure RESTful APIs and seamlessly integrating third-party services, data sources, and automated workflows.',
      features: ['RESTful API Architecture', 'Third-Party Integrations', 'Secure Authentication', 'Backend Orchestration']
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ marginBottom: '1rem' }}>What I can do for you ?</h2>
          
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: index * 0.01
              }}
              whileHover={{ y: -10, borderColor: 'var(--accent-color)' }}
              style={{ 
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                height: '100%',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                background: 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '16px', 
                background: 'rgba(18, 194, 233, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--accent-color)',
                marginBottom: '0.5rem'
              }}>
                {service.icon}
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{service.description}</p>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {service.features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                    <Check size={18} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-primary)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Ultra-Compact & Modern */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '1.25rem',
            padding: '1.25rem 2rem',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: '1 1 350px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '10px', 
              background: 'var(--accent-gradient)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              flexShrink: 0
            }}>
              <MessageSquare size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.1rem', fontWeight: '600' }}>
                Not sure what you need?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                I’ll help you choose the best solution for your project.
              </p>
            </div>
          </div>
          
          <motion.a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary" 
            style={{ 
              padding: '0.6rem 1.5rem', 
              borderRadius: '0.75rem', 
              fontSize: '0.85rem',
              fontWeight: '400',
              whiteSpace: 'nowrap'
            }}
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
