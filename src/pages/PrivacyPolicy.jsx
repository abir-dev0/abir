import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, Trash2, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Eye size={20} className="accent-color" style={{ color: 'var(--accent-color)' }} />,
      title: "1. Information We Collect",
      content: "We only collect information that you voluntarily provide to us. This includes details submitted through the contact form (such as your name, email address, and message contents) and any interaction logs with the AI Assistant. Interaction logs with the AI Assistant are processed during your session to provide real-time responses and are not stored permanently or associated with persistent user profiles."
    },
    {
      icon: <Shield size={20} className="accent-color" style={{ color: 'var(--accent-color)' }} />,
      title: "2. How We Use Your Information",
      content: "The information collected is used solely to respond to your direct inquiries, improve the interactive features of the website (such as the AI Assistant), and ensure the security and correct operation of our services. We do not sell, rent, or trade your personal information with third parties."
    },
    {
      icon: <Lock size={20} className="accent-color" style={{ color: 'var(--accent-color)' }} />,
      title: "3. Third-Party Services & Integrations",
      content: "This website may integrate third-party APIs and services, including but not limited to Meta Graph API, Vercel analytics, and Google Fonts. These integrations may compile non-personal telemetry or require standard technical handshakes. Any Meta integration fully complies with the Meta Developer Policies. We encourage you to review the privacy policies of these third-party platforms."
    },
    {
      icon: <Trash2 size={20} className="accent-color" style={{ color: 'var(--accent-color)' }} />,
      title: "4. Data Deletion Requests",
      content: "In compliance with general data protection regulations (such as GDPR) and Meta Developer Policies, we provide users with the right to request the deletion of any personal data we may hold. If you wish to request the deletion of your conversation history, contact submissions, or any other data associated with your visits, please send an email to the contact address listed below. We will process your request within 30 days."
    },
    {
      icon: <Mail size={20} className="accent-color" style={{ color: 'var(--accent-color)' }} />,
      title: "5. Contact Information",
      content: "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact Abir Hachlafi at: hachlafiabir@gmail.com."
    }
  ];

  return (
    <div className="section" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ marginBottom: '3rem' }}
        >
          <Link
            to="/"
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
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Policy Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                background: 'rgba(10, 10, 20, 0.5)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                {section.icon}
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                  {section.title}
                </h3>
              </div>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1rem', 
                lineHeight: '1.6', 
                margin: 0 
              }}>
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
