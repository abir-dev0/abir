import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Send, ChevronRight, FileText, ArrowRight 
} from 'lucide-react';

const RobotIcon = ({ size = 32, isTyping = false }) => {
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Antenna */}
        <motion.circle
          cx="20" cy="5" r="2"
          fill="#12c2e9"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <rect x="19" y="5" width="2" height="5" fill="#333" />

        {/* Head */}
        <rect x="8" y="10" width="24" height="22" rx="6" fill="#1a1a2e" stroke="#12c2e9" strokeWidth="1.5" />

        {/* Screen/Face */}
        <rect x="11" y="13" width="18" height="14" rx="3" fill="#0f0f1a" />

        {/* Eyes */}
        <motion.rect
          x="14" y="17" width="4" height="4" rx="1" fill="#12c2e9"
          animate={{
            scaleY: [1, 1, 0.1, 1],
            opacity: isTyping ? [1, 0.5, 1] : 1
          }}
          transition={{
            scaleY: { repeat: Infinity, duration: 4, times: [0, 0.9, 0.95, 1] },
            opacity: { repeat: Infinity, duration: 0.5 }
          }}
        />
        <motion.rect
          x="22" y="17" width="4" height="4" rx="1" fill="#12c2e9"
          animate={{
            scaleY: [1, 1, 0.1, 1],
            opacity: isTyping ? [1, 0.5, 1] : 1
          }}
          transition={{
            scaleY: { repeat: Infinity, duration: 4, times: [0, 0.9, 0.95, 1] },
            opacity: { repeat: Infinity, duration: 0.5 }
          }}
        />

        {/* Mouth/Smile */}
        <motion.path
          d="M15 24 Q20 28 25 24"
          stroke="#12c2e9"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: isTyping ? "M14 24 Q20 30 26 24" : "M15 24 Q20 28 25 24",
            scaleQ: isTyping ? 1.2 : 1
          }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        />
      </svg>
      {/* Background Glow */}
      <motion.div
        style={{
          position: 'absolute',
          inset: -5,
          background: 'radial-gradient(circle, rgba(18, 194, 233, 0.25) 0%, transparent 70%)',
          zIndex: -1,
          borderRadius: '50%'
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </div>
  );
};

// Formatted Markdown-like Renderer for LLM outputs
const FormattedMessage = ({ text }) => {
  if (!text) return null;
  const lines = text.split('\n');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} style={{ height: '0.2rem' }} />;

        if (trimmed.startsWith('### ')) {
          return (
            <h5 key={idx} style={{
              margin: '0.5rem 0 0.2rem 0',
              color: '#12c2e9',
              fontSize: '0.92rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              {trimmed.replace('### ', '')}
            </h5>
          );
        }

        if (trimmed.startsWith('• ') || trimmed.startsWith('- ') || trimmed.startsWith('✓ ')) {
          const isCheck = trimmed.startsWith('✓ ');
          const content = trimmed.substring(2);
          const parts = content.split(/(\*\*.*?\*\*)/g);
          return (
            <div key={idx} style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start', paddingLeft: '0.2rem' }}>
              <span style={{ color: isCheck ? '#10b981' : 'var(--accent-color)', fontWeight: 'bold' }}>
                {isCheck ? '✓' : '•'}
              </span>
              <span style={{ fontSize: '0.88rem', lineHeight: '1.5' }}>
                {parts.map((part, pIdx) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={pIdx} style={{ color: '#fff' }}>{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </span>
            </div>
          );
        }

        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={idx} style={{ margin: 0, fontSize: '0.88rem', lineHeight: '1.55' }}>
            {parts.map((part, pIdx) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={pIdx} style={{ color: '#fff' }}>{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [assistantMode, setAssistantMode] = useState('rag'); // 'rag' | 'offline'
  
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      text: "Hi! I'm Abir's **AI Portfolio Assistant** 👋\n\nI can tell you all about her machine learning models, Data Lakehouse platform, technical skills, and research projects. What would you like to explore?",
      isInitial: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleToggle = () => setIsOpen(prev => !prev);
    window.addEventListener('open-ai', handleOpen);
    window.addEventListener('toggle-ai', handleToggle);
    return () => {
      window.removeEventListener('open-ai', handleOpen);
      window.removeEventListener('toggle-ai', handleToggle);
    };
  }, []);

  const handleAction = (cta) => {
    if (cta.action === 'scroll') {
      const element = document.getElementById(cta.target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth < 480) setIsOpen(false);
      }
    } else if (cta.action === 'link') {
      window.open(cta.url, '_blank');
    }
  };

  const handleSend = async (text) => {
    const userText = text || inputValue;
    if (!userText.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: userText }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const history = messages
        .filter(m => !m.isInitial)
        .slice(-6)
        .map(m => ({
          role: m.type === 'ai' ? 'model' : 'user',
          text: m.text
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          history
        })
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      setAssistantMode(data.mode || 'rag');
      setMessages(prev => [
        ...prev,
        {
          type: 'ai',
          text: data.reply,
          sources: data.sources || [],
          ctas: data.ctas || []
        }
      ]);
    } catch (err) {
      console.warn('API call failed, running deterministic client fallback:', err);
      setAssistantMode('offline');
      setMessages(prev => [
        ...prev,
        {
          type: 'ai',
          text: "I am currently in **Offline Mode**. Abir specializes in AI & Data Engineering at EMSI, with deep experience in Multi-Agent Systems (Lexiva AI), Data Lakehouses (Snowflake, Airflow, XGBoost), and Full-Stack systems (FastAPI, React, Django).\n\nFeel free to explore her live projects or contact her directly!",
          sources: [{ title: 'About Abir & Skills', section: 'Portfolio' }],
          ctas: [
            { label: 'View Projects', action: 'scroll', target: 'projects' },
            { label: 'Contact Abir', action: 'scroll', target: 'contact' }
          ]
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickButtons = [
    { label: 'Why hire Abir for AI?', query: 'Why is Abir a strong candidate for an AI & Data internship?' },
    { label: 'Lexiva AI', query: 'Tell me about Lexiva AI and its multi-agent architecture' },
    { label: 'Data Lakehouse', query: 'Explain her Data Lakehouse and XGBoost pricing model' },
    { label: 'Certifications', query: 'What AI and cloud certifications does Abir hold?' }
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      <motion.div
        className="ai-assistant-wrapper"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.5rem'
        }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              style={{
                background: 'rgba(15, 15, 26, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(18, 194, 233, 0.3)',
                padding: '0.6rem 1rem',
                borderRadius: '2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
              onClick={() => setIsOpen(true)}
            >
              <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: '500' }}>
                Ask Abir's AI Agent
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'var(--accent-gradient)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 25px rgba(18, 194, 233, 0.4)',
            position: 'relative'
          }}
        >
          {isOpen ? <X size={26} /> : <RobotIcon size={34} isTyping={isTyping} />}
        </motion.button>
      </motion.div>

      {/* Main AI Chatbot Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              bottom: '6.5rem',
              right: '2rem',
              width: '420px',
              maxWidth: 'calc(100vw - 2.5rem)',
              height: '600px',
              maxHeight: 'calc(100vh - 8rem)',
              background: 'rgba(15, 15, 26, 0.94)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(18, 194, 233, 0.25)',
              borderRadius: '1.25rem',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 99,
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.1rem 1.25rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <RobotIcon size={26} isTyping={isTyping} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: '600', color: '#fff' }}>
                      Abir's AI Agent
                    </h4>
                    <span style={{
                      padding: '0.15rem 0.5rem',
                      borderRadius: '1rem',
                      background: assistantMode === 'rag' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                      border: `1px solid ${assistantMode === 'rag' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
                      fontSize: '0.68rem',
                      color: assistantMode === 'rag' ? '#10b981' : '#f59e0b',
                      fontWeight: 600
                    }}>
                      {assistantMode === 'rag' ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent'
            }}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.type === 'ai' ? -10 : 10, y: 5 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  style={{
                    alignSelf: msg.type === 'ai' ? 'flex-start' : 'flex-end',
                    maxWidth: '88%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{
                    padding: '0.85rem 1.15rem',
                    borderRadius: msg.type === 'ai' ? '0 1.2rem 1.2rem 1.2rem' : '1.2rem 0 1.2rem 1.2rem',
                    background: msg.type === 'ai' ? 'rgba(255, 255, 255, 0.05)' : 'var(--accent-gradient)',
                    color: 'white',
                    border: msg.type === 'ai' ? '1px solid rgba(255, 255, 255, 0.07)' : 'none',
                    boxShadow: msg.type === 'ai' ? '0 4px 15px rgba(0, 0, 0, 0.2)' : 'none'
                  }}>
                    <FormattedMessage text={msg.text} />
                  </div>

                  {/* Source Attribution Chips */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingLeft: '0.3rem' }}>
                      <span style={{ fontSize: '0.68rem', color: 'rgba(255, 255, 255, 0.45)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                        📚 Verified Sources:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {msg.sources.map((src, sIdx) => (
                          <span
                            key={sIdx}
                            style={{
                              padding: '0.2rem 0.55rem',
                              borderRadius: '0.4rem',
                              background: 'rgba(18, 194, 233, 0.08)',
                              border: '1px solid rgba(18, 194, 233, 0.2)',
                              fontSize: '0.72rem',
                              color: 'var(--accent-color)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.25rem'
                            }}
                          >
                            <FileText size={10} /> {src.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Interactive Call-To-Action Buttons */}
                  {msg.ctas && msg.ctas.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.2rem' }}>
                      {msg.ctas.map((cta, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={() => handleAction(cta)}
                          style={{
                            padding: '0.4rem 0.8rem',
                            borderRadius: '0.6rem',
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            color: 'white',
                            fontSize: '0.78rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
                          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
                        >
                          {cta.label}
                          <ArrowRight size={12} />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Initial Quick Suggestion Buttons */}
                  {msg.isInitial && (
                    <div style={{
                      marginTop: '0.5rem',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem'
                    }}>
                      {quickButtons.map((btn, bIdx) => (
                        <button
                          key={bIdx}
                          onClick={() => handleSend(btn.query)}
                          style={{
                            padding: '0.45rem 0.75rem',
                            borderRadius: '0.75rem',
                            background: 'rgba(18, 194, 233, 0.08)',
                            border: '1px solid rgba(18, 194, 233, 0.2)',
                            color: 'var(--accent-color)',
                            fontSize: '0.76rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.background = 'rgba(18, 194, 233, 0.18)';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background = 'rgba(18, 194, 233, 0.08)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          {btn.label}
                          <ChevronRight size={11} />
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <div style={{
                  alignSelf: 'flex-start',
                  padding: '0.8rem 1.1rem',
                  borderRadius: '0 1.2rem 1.2rem 1.2rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-color)', marginRight: '4px' }}>Thinking</span>
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#12c2e9' }}></motion.span>
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#12c2e9' }}></motion.span>
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#12c2e9' }}></motion.span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              style={{
                padding: '1rem 1.25rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                gap: '0.75rem'
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Abir's AI models, projects, or stack..."
                style={{
                  flex: 1,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.75rem',
                  padding: '0.75rem 1rem',
                  color: 'white',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '0.75rem',
                  background: inputValue.trim() ? 'var(--accent-gradient)' : 'rgba(255, 255, 255, 0.05)',
                  border: 'none',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: inputValue.trim() ? 'pointer' : 'default',
                  transition: 'all 0.2s'
                }}
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
