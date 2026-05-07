import { motion } from 'framer-motion';
import { Globe, Building2, Layout, Bot, Users, Zap, Check, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building2 size={32} />,
      title: 'Business Management Systems',
      description: 'Custom web-based systems designed to help businesses manage operations, orders, clients, inventory, and workflows efficiently.',
      features: ['ERP & dashboard systems', 'Role-based access management', 'Order & inventory tracking', 'Business analytics & reporting']
    },
    {
      icon: <Globe size={32} />,
      title: 'Full-Stack Web Applications',
      description: 'Modern, scalable, and responsive web applications built with clean architecture and optimized performance.',
      features: ['React & Node.js applications', 'Authentication & API integration', 'Responsive UI/UX', 'Secure backend systems']
    },
    {
      icon: <Layout size={32} />,
      title: 'SaaS & Dashboard Platforms',
      description: 'Interactive platforms and dashboards designed for startups, businesses, and data-driven applications.',
      features: ['Admin dashboards', 'Analytics & reporting tools', 'Real-time features', 'Multi-user systems']
    },
    {
      icon: <Bot size={32} />,
      title: 'AI & Data-Driven Features',
      description: 'Smart features that improve user experience and automate workflows using modern AI technologies.',
      features: ['AI-powered assistants', 'Intelligent dashboards', 'Automation workflows', 'Data visualization & insights']
    },
    {
      icon: <Users size={32} />,
      title: 'Community & Interactive Platforms',
      description: 'Platforms focused on communication, engagement, and user interaction.',
      features: ['Messaging systems', 'User-generated content', 'Community features', 'Real-time interactions']
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance & Optimization',
      description: 'Improving speed, responsiveness, and overall user experience for modern web applications.',
      features: ['Performance optimization', 'Clean scalable code', 'Mobile responsiveness', 'UI/UX improvements']
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
