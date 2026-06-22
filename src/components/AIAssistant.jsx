import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Sparkles, ChevronRight, ExternalLink, Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';

const RobotIcon = ({ size = 32, isTyping = false }) => {
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
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
          background: 'radial-gradient(circle, rgba(18, 194, 233, 0.2) 0%, transparent 70%)',
          zIndex: -1,
          borderRadius: '50%'
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </div>
  );
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      text: "Hi! I’m Abir’s AI assistant 👋 I can tell you about her projects, skills, services, and education.",
      isInitial: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [lastContext, setLastContext] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const knowledgeBase = [
    // --- GREETINGS & CONVERSATION ---
    {
      priority: 5,
      category: 'greetings',
      keywords: ['hi', 'hello', 'hey', 'greetings', 'sup', 'morning', 'afternoon', 'evening'],
      response: "Hello there! 👋 I'm Abir's AI assistant. I can tell you all about her work, from AI agents and Data Lakehouses to full-stack web apps. What are you interested in?"
    },
    {
      priority: 5,
      category: 'greetings',
      keywords: ['how are you', 'how do you do', 'how is it going'],
      response: "I'm doing great, thanks for asking! My circuits are fully optimized and ready to talk about Abir's amazing projects. Want to hear about her latest work?"
    },
    {
      priority: 5,
      category: 'greetings',
      keywords: ['thanks', 'thank you', 'cool', 'awesome', 'nice', 'great', 'good job'],
      response: "You're very welcome! Let me know if you want to explore more of Abir's portfolio or contact her directly."
    },
    {
      priority: 5,
      category: 'greetings',
      keywords: ['bye', 'goodbye', 'see ya', 'cya'],
      response: "Goodbye! Feel free to reach out to Abir directly using the contact form if you want to collaborate!"
    },

    // --- SPECIFIC PROJECTS (High Priority) ---
    {
      priority: 4,
      category: 'projects',
      id: 'data-lakehouse',
      keywords: ['data', 'lakehouse', 'medallion', 'airflow', 'snowflake', 'xgboost', 'smart pricing', 'ecommerce', 'analytics'],
      response: "Abir designed a dual-architecture Data Lakehouse Platform for e-commerce. It uses a Medallion Architecture and compares On-Premise (Docker, Airflow) with Cloud (Snowflake) solutions.",
      contextResponse: "The project also features an XGBoost Machine Learning module for Smart Pricing and an interactive Streamlit dashboard for real-time KPI visualization.",
      cta: { label: "View Lakehouse", action: "scroll", target: "projects" }
    },
    {
      priority: 4,
      category: 'projects',
      id: 'erp',
      keywords: ['erp', 'aram', 'inventory', 'production', 'logistics', 'full-stack erp'],
      response: "Abir developed a full-stack ERP system called ARAM. It centralizes operations with modules for order processing, real-time inventory tracking, and client management.",
      contextResponse: "Built with Django and SQL, it features role-based access, data visualization with Chart.js, and automated Excel exports for business reporting.",
      cta: { label: "See ERP Project", action: "scroll", target: "projects" }
    },
    {
      priority: 4,
      category: 'projects',
      id: 'lexiva',
      keywords: ['lexiva', 'research', 'academic', 'literature', 'multi-agent', 'n8n'],
      response: "Lexiva AI is an advanced research assistant she built using Google Gemini, LangChain, and n8n to automate literature reviews and extract insights across domains.",
      contextResponse: "Lexiva uses precision PDF extraction (PyMuPDF) and orchestrates multi-step AI agents to synthesize findings and identify research gaps in hundreds of papers.",
      cta: { label: "View Lexiva AI", action: "scroll", target: "projects" }
    },
    {
      priority: 4,
      category: 'projects',
      id: 'mvr',
      keywords: ['minibus', 'rental', 'mvr', 'booking'],
      response: "MVR is a full-stack Minibus Rental System Abir built with React, Node.js, Express, and MongoDB to streamline the vehicle reservation and payment process.",
      contextResponse: "It automates scheduling, tracks real-time availability to prevent double-bookings, and features a clean Tailwind CSS interface.",
      cta: { label: "View MVR", action: "scroll", target: "projects" }
    },
    {
      priority: 4,
      category: 'projects',
      id: 'travelcircle',
      keywords: ['travel', 'tourism', 'mytravelcircle', 'moroccan', 'morocco'],
      response: "MyTravelCircle is a collaborative tourism platform for exploring Moroccan cities. It's built with Django and PostgreSQL to allow users to share travel stories.",
      contextResponse: "It serves as a community hub with user reviews, ratings, and recommendations for authentic local experiences.",
      cta: { label: "View TravelCircle", action: "scroll", target: "projects" }
    },
    {
      priority: 4,
      category: 'projects',
      id: 'skycast',
      keywords: ['skycast', 'weather', 'real-time weather', 'weather app'],
      response: "SkyCast is a lightning-fast, mobile-first weather application built with React and Tailwind CSS. It integrates the OpenWeather API for global meteorological data.",
      contextResponse: "The app features dynamic background updates based on current weather conditions and optimized state management for a seamless experience.",
      cta: { label: "View SkyCast", action: "scroll", target: "projects" }
    },
    {
      priority: 4,
      category: 'projects',
      id: 'portfolio',
      keywords: ['portfolio', 'cosmic', 'fusion', '3d', 'animations', 'framer'],
      response: "You're looking at it! Cosmic Fusion is Abir's personal portfolio built with React and Framer Motion, featuring glassmorphism UI and advanced micro-animations.",
      contextResponse: "The portfolio emphasizes visual excellence and modern web engineering, avoiding generic templates to create a stunning first impression.",
      cta: { label: "Explore Portfolio", action: "scroll", target: "projects" }
    },
    {
      priority: 4,
      category: 'projects',
      id: 'peak',
      keywords: ['peak', 'library', 'books', 'ecommerce', 'e-commerce', 'laravel'],
      response: "Peak Online Library is an e-commerce platform for book enthusiasts, featuring a Laravel RESTful API backend and a React.js frontend.",
      contextResponse: "It handles user authentication, inventory management with MySQL, and provides a 24/7 digital storefront for secure transactions.",
      cta: { label: "View Peak Library", action: "scroll", target: "projects" }
    },

    // --- GENERAL CATEGORIES ---
    {
      priority: 3,
      category: 'projects',
      keywords: ['projects', 'work', 'built', 'developed', 'showcase', 'saas', 'platform', 'dashboard', 'frontend', 'backend', 'fullstack'],
      response: "Abir has built a diverse range of systems: Enterprise ERPs, Data Lakehouses, Multi-Agent AI workflows, and stunning Frontend portfolios. Is there a specific tech or project type you want to see?",
      cta: { label: "Explore All Work", action: "scroll", target: "projects" }
    },
    {
      priority: 3,
      category: 'skills',
      keywords: ['skills', 'tech', 'stack', 'languages', 'technologies', 'code', 'coding', 'react', 'node', 'django', 'python', 'laravel', 'sql', 'database'],
      response: "Abir's technical stack is extensive! She's proficient in Python, JavaScript (React, Node.js), Django, Laravel, and data engineering tools like Snowflake and Airflow.",
      cta: { label: "View Technical Stack", action: "scroll", target: "skills" }
    },
    {
      priority: 3,
      category: 'ai',
      keywords: ['ai', 'artificial intelligence', 'machine learning', 'gemini', 'langchain', 'llm', 'llms', 'agents'],
      response: "Abir specializes in intelligent automation. She uses LLMs like Google Gemini, frameworks like LangChain, and n8n to build multi-agent workflows and predictive models (like XGBoost).",
      cta: { label: "See AI Services", action: "scroll", target: "services" }
    },
    {
      priority: 3,
      category: 'contact',
      keywords: ['contact', 'hire', 'email', 'reach', 'message', 'call', 'linkedin', 'github', 'freelance'],
      response: "You can reach Abir directly through the contact form, or connect with her on LinkedIn and GitHub. Let me help you scroll there!",
      ctas: [
        { label: "Contact Form", action: "scroll", target: "contact", icon: <Mail size={14} /> },
        { label: "LinkedIn", action: "link", url: "https://www.linkedin.com/in/abirhachlafi/", icon: <FaLinkedin size={14} /> }
      ]
    },

    // --- EDUCATION & ABOUT ---
    {
      priority: 2,
      category: 'education',
      keywords: ['education', 'degree', 'study', 'university', 'academic', 'student', 'emsi', 'school'],
      response: "Abir is a software engineering student at EMSI, focusing heavily on full-stack development, scalable data architectures, and AI systems.",
      cta: { label: "View Education", action: "scroll", target: "experience" }
    },
    {
      priority: 1,
      category: 'about',
      keywords: ['who', 'abir', 'specialized', 'specialization', 'profile', 'expert', 'focus', 'background', 'identity'],
      response: "Abir is a software engineer who architects intelligent systems and data-driven platforms. She bridges the gap between complex backend infrastructure and elegant frontend designs."
    }
  ];

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

  const handleSend = (text) => {
    const userText = text || inputValue;
    if (!userText.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: userText }]);
    setInputValue('');
    setIsTyping(true);

    const typingDelay = Math.floor(Math.random() * (1500 - 600 + 1)) + 600;

    setTimeout(() => {
      const lowerText = userText.toLowerCase();
      let bestMatch = null;

      const sortedKB = [...knowledgeBase].sort((a, b) => {
        if (b.priority !== a.priority) return b.priority - a.priority;
        const aMax = Math.max(...a.keywords.map(k => k.length));
        const bMax = Math.max(...b.keywords.map(k => k.length));
        return bMax - aMax;
      });

      for (const item of sortedKB) {
        // Relaxed matching logic: substring for multi-word, boundary for single word
        const found = item.keywords.some(keyword => {
          if (keyword.includes(' ')) {
            return lowerText.includes(keyword);
          } else {
            const regex = new RegExp(`\\b${keyword}\\b`, 'i');
            return regex.test(lowerText);
          }
        });

        if (found) {
          bestMatch = item;
          setLastContext(item);
          break;
        }
      }

      // Check follow ups
      if (!bestMatch && lastContext) {
        const followUpKeywords = ['features', 'more', 'details', 'tell me more', 'show', 'explain', 'what else', 'and'];
        const isFollowUp = followUpKeywords.some(k => lowerText.includes(k));

        if (isFollowUp) {
          bestMatch = lastContext.contextResponse ?
            { ...lastContext, response: lastContext.contextResponse } :
            lastContext;
        }
      }

      let responseText = "";
      let responseCtas = [];

      if (bestMatch) {
        responseText = bestMatch.response;
        if (bestMatch.cta) responseCtas = [bestMatch.cta];
        if (bestMatch.ctas) responseCtas = bestMatch.ctas;
      } else {
        const fallbacks = [
          "I'm not entirely sure about that! But I can tell you about Abir's Data Lakehouse, her AI integration work, or her Full-Stack web apps.",
          "Hmm, I didn't catch that. Try asking me about 'projects', 'skills', or 'how to contact Abir'!",
          "I'm still learning! While I process that, would you like to see her latest AI Research Assistant, Lexiva?"
        ];
        responseText = fallbacks[Math.floor(Math.random() * fallbacks.length)];
      }

      setMessages(prev => [...prev, { type: 'ai', text: responseText, ctas: responseCtas }]);
      setIsTyping(false);
    }, typingDelay);
  };

  const quickButtons = [
    { label: 'View Projects', query: 'Tell me about your projects' },
    { label: 'Data Lakehouse', query: 'Tell me about the Data Lakehouse project' },
    { label: 'AI Projects', query: 'What AI work has she done?' },
    { label: 'Contact Abir', query: 'How can I contact her?' }
  ];

  return (
    <>
      {/* Floating Button */}
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
                background: 'rgba(5, 5, 5, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '0.5rem 1rem',
                borderRadius: '0.75rem',
                fontSize: '0.85rem',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                marginBottom: '0.5rem'
              }}
            >
              Ask AI About My Work
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="ai-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: '64px',
            height: '64px',
            background: 'var(--accent-gradient)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 25px rgba(18, 194, 233, 0.4)',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          {isOpen ? <X size={28} /> : <RobotIcon size={40} isTyping={isTyping} />}
          {!isOpen && (
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '12px',
                height: '12px',
                background: '#10b981',
                borderRadius: '50%',
                border: '2px solid rgba(10, 10, 20, 1)'
              }}
            />
          )}
        </motion.button>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="glass-panel ai-chat-panel"
            style={{
              position: 'fixed',
              bottom: '6rem',
              right: '2rem',
              width: '380px',
              maxWidth: 'calc(100vw - 4rem)',
              height: '500px',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              padding: 0,
              overflow: 'hidden',
              background: 'rgba(10, 10, 20, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.25rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  background: 'var(--accent-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <RobotIcon size={24} isTyping={isTyping} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>Abir's Assistant</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)' }}>Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '50%',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'none'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1.5rem',
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
                    maxWidth: '85%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem'
                  }}
                >
                  <div style={{
                    padding: '0.8rem 1.1rem',
                    borderRadius: msg.type === 'ai' ? '0 1.2rem 1.2rem 1.2rem' : '1.2rem 0 1.2rem 1.2rem',
                    background: msg.type === 'ai' ? 'rgba(255, 255, 255, 0.05)' : 'var(--accent-gradient)',
                    color: 'white',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    border: msg.type === 'ai' ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
                  }}>
                    {msg.text}
                  </div>

                  {/* CTAs */}
                  {msg.ctas && msg.ctas.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {msg.ctas.map((cta, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={() => handleAction(cta)}
                          style={{
                            padding: '0.4rem 0.8rem',
                            borderRadius: '0.6rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
                          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                        >
                          {cta.icon}
                          {cta.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {msg.isInitial && (
                    <div style={{
                      marginTop: '0.4rem',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {quickButtons.map((btn, bIdx) => (
                        <button
                          key={bIdx}
                          onClick={() => handleSend(btn.query)}
                          style={{
                            padding: '0.5rem 0.8rem',
                            borderRadius: '0.75rem',
                            background: 'rgba(18, 194, 233, 0.1)',
                            border: '1px solid rgba(18, 194, 233, 0.2)',
                            color: 'var(--accent-color)',
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.background = 'rgba(18, 194, 233, 0.2)';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background = 'rgba(18, 194, 233, 0.1)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          {btn.label}
                          <ChevronRight size={12} />
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
                  gap: '4px'
                }}>
                  <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'white' }}></motion.span>
                  <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'white' }}></motion.span>
                  <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'white' }}></motion.span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              style={{
                padding: '1.25rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                gap: '0.75rem'
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about my work..."
                style={{
                  flex: 1,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.75rem',
                  padding: '0.75rem 1rem',
                  color: 'white',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
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
