import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Zap, RefreshCw, Rocket, Bot, Check, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Business Websites',
      description: 'I build clean and professional websites that represent your brand and help you attract more clients.',
      features: ['Responsive on all devices', 'Modern and clean design', 'Fast and optimized performance']
    },
    {
      icon: <ShoppingBag size={32} />,
      title: 'E-commerce / Brand Websites',
      description: 'Perfect for clothing brands and small businesses that want a strong online presence.',
      features: ['Product showcase pages', 'User-friendly interface', 'Scalable and easy to manage']
    },
    {
      icon: <Zap size={32} />,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to turn visitors into customers.',
      features: ['Clear structure and messaging', 'Fast loading speed', 'Optimized for conversions']
    },
    {
      icon: <RefreshCw size={32} />,
      title: 'Website Redesign',
      description: 'Already have a website? I can improve it to make it modern, clean, and more effective.',
      features: ['Better user experience', 'Improved design', 'Mobile optimization']
    },
    {
      icon: <Rocket size={32} />,
      title: 'Performance Optimization',
      description: 'I improve your website speed and overall performance.',
      features: ['Faster loading time', 'Better user experience', 'Clean and optimized code']
    },
    {
      icon: <Bot size={32} />,
      title: 'AI & Data Features',
      description: 'Add smart features to your website to stand out.',
      features: ['Chatbots for customer interaction', 'Simple recommendation systems', 'Basic dashboards & automation']
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
