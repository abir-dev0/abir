// api/_data/knowledge.js
// Private server-side module: Encapsulates portfolio knowledge, precomputed vectors, and similarity search.
// Not exposed as an HTTP endpoint (prefixed with _).

export const knowledgeChunks = [
  {
    id: 'profile-bio',
    title: 'About Abir Hachlafi',
    section: 'About',
    category: 'bio',
    content: `Abir Hachlafi is an AI & Data Engineering student at EMSI (École Marocaine des Sciences de l'Ingénieur). She builds at the intersection of Artificial Intelligence, Data Engineering, and Software Engineering. She turns complex ideas into useful applications, ranging from machine learning models and LLM-powered solutions to full-stack products. She is driven by curiosity, continuous learning, and building high-impact software. Located in Morocco. Email: abirhachlafi1@gmail.com, GitHub: https://github.com/abir-dev0, LinkedIn: https://linkedin.com/in/abir-hachlafi.`,
    keywords: ['abir', 'who', 'about', 'bio', 'student', 'emsi', 'engineering', 'morocco', 'contact', 'developer', 'profile', 'software'],
    cta: { label: 'About Abir', action: 'scroll', target: 'about' }
  },
  {
    id: 'ai-internship-fit',
    title: 'Why Hire Abir for an AI & Data Internship',
    section: 'Career & Strengths',
    category: 'career',
    content: `Why Abir is a strong candidate for AI & Data internships:
1. Academic Rigor: Enrolled in AI & Data Engineering at EMSI with solid training in algorithms, mathematics, machine learning theory, and distributed systems.
2. Production Multi-Agent Systems Experience: Architected Lexiva AI using Google Gemini, LangChain, n8n, and PyMuPDF for automated scientific literature reviews.
3. End-to-End Data Engineering & ML: Built a dual-architecture Data Lakehouse (Medallion Architecture) comparing On-Premise (Docker, MinIO, Apache Airflow) with Cloud (Snowflake), and trained an XGBoost model for Smart Dynamic Pricing.
4. Verified Cloud AI Credential: Holds the Oracle Cloud Infrastructure (OCI) Certified AI Foundations Associate certification.
5. Full-Stack Versatility: Fluent in Python, FastAPI, Django, React.js, PostgreSQL, Docker, and Git. Bridges the gap between AI models and reliable software engineering.`,
    keywords: ['hire', 'internship', 'intern', 'why', 'candidate', 'strengths', 'reasons', 'qualifications', 'recruit', 'job', 'interview', 'role'],
    cta: { label: 'Contact Abir', action: 'scroll', target: 'contact' }
  },
  {
    id: 'project-lexiva-ai',
    title: 'Lexiva AI - Multi-Agent Research Assistant',
    section: 'Projects',
    category: 'projects',
    content: `Lexiva AI is an advanced AI-powered research assistant designed to automate scientific literature reviews through a multi-agent system (SMA). Researchers upload scientific papers and receive both granular section insights and cross-paper synthesis.
Architecture: Built with FastAPI, LangChain, Google Gemini, n8n workflow orchestration, and PyMuPDF.
Key features: Two specialized agents—one for precision extraction of methodology, datasets, and metrics from academic PDFs, and another for cross-paper synthesis to identify research gaps and domain trends. Modern glassmorphism UI built with React.`,
    keywords: ['lexiva', 'research', 'assistant', 'multi-agent', 'langchain', 'gemini', 'n8n', 'fastapi', 'literature', 'review', 'rag', 'papers', 'agents', 'pymupdf', 'llm'],
    cta: { label: 'View Lexiva AI', action: 'scroll', target: 'projects' }
  },
  {
    id: 'project-data-lakehouse',
    title: 'E-commerce Data Lakehouse Platform',
    section: 'Projects',
    category: 'projects',
    content: `A dual-architecture modern Data Lakehouse implementation for e-commerce. Implements the Medallion Architecture (Bronze, Silver, Gold layers) and compares two environments: On-Premise (Docker containerization, MinIO object storage, Apache Airflow ETL orchestration) and Cloud (Snowflake, Snowpark).
Includes a Machine Learning module using XGBoost for Smart Dynamic Pricing based on sales patterns, and an interactive Streamlit dashboard for real-time sales and KPI analytics. Solves enterprise data fragmentation.`,
    keywords: ['lakehouse', 'medallion', 'airflow', 'snowflake', 'snowpark', 'xgboost', 'pricing', 'streamlit', 'docker', 'minio', 'etl', 'pipeline', 'bronze', 'silver', 'gold', 'warehouse'],
    cta: { label: 'View Lakehouse Project', action: 'scroll', target: 'projects' }
  },
  {
    id: 'project-erp-aram',
    title: 'Full-Stack ERP System',
    section: 'Projects',
    category: 'projects',
    content: `ARAM is a full-stack Enterprise Resource Planning (ERP) system designed to centralize core business processes for manufacturing and logistics. Modules include client management, purchase and sales order processing, real-time inventory tracking, production workflows, and logistics dispatch. Built with Django, Python, PostgreSQL, and Tailwind CSS. Features Role-Based Access Control (RBAC), analytical data visualization using Chart.js, and automated Excel data export for business reporting.`,
    keywords: ['erp', 'aram', 'inventory', 'orders', 'django', 'logistics', 'production', 'chart.js', 'rbac', 'excel', 'business'],
    cta: { label: 'View ERP Project', action: 'scroll', target: 'projects' }
  },
  {
    id: 'project-peak-library',
    title: 'Peak Online Library Web App',
    section: 'Projects',
    category: 'projects',
    content: `Peak Online Library is a full-stack e-commerce book store platform. Features a responsive React.js frontend, Laravel RESTful API backend, and MySQL database. Includes user authentication, book catalog search and filtering, shopping cart, inventory management, and transaction handling.`,
    keywords: ['peak', 'library', 'books', 'laravel', 'react', 'mysql', 'ecommerce', 'store', 'cart'],
    cta: { label: 'View Peak Library', action: 'scroll', target: 'projects' }
  },
  {
    id: 'project-minibus-rental',
    title: 'Minibus Rental System (MVR)',
    section: 'Projects',
    category: 'projects',
    content: `MVR is a web reservation and fleet management platform for minibus rental operations. Built with React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Automates the booking lifecycle, prevents double-booking with real-time vehicle availability tracking, and handles rental contracts.`,
    keywords: ['minibus', 'rental', 'mvr', 'booking', 'express', 'mongodb', 'fleet', 'reservation'],
    cta: { label: 'View MVR Project', action: 'scroll', target: 'projects' }
  },
  {
    id: 'project-mytravelcircle',
    title: 'MyTravelCircle - Moroccan Tourism Platform',
    section: 'Projects',
    category: 'projects',
    content: `MyTravelCircle is a community-driven tourism platform built with Django, Python, PostgreSQL, and Tailwind CSS. Designed to showcase Moroccan destinations, hidden gems, and user-contributed travel experiences with ratings, interactive maps, and reviews.`,
    keywords: ['travel', 'tourism', 'mytravelcircle', 'morocco', 'moroccan', 'destinations', 'community', 'django'],
    cta: { label: 'View Projects', action: 'scroll', target: 'projects' }
  },
  {
    id: 'project-portfolio',
    title: 'Cosmic Fusion Developer Portfolio & AI Assistant',
    section: 'Projects',
    category: 'projects',
    content: `Abir's personal developer portfolio, built with React 19, Framer Motion, and Vite. Features a cosmic glassmorphism UI, infinite marquee tech stack tickers, and this intelligent AI Assistant with semantic vector retrieval, cosine similarity matching, Google Gemini grounded generation, and a Job Description Matcher.`,
    keywords: ['portfolio', 'website', 'cosmic', 'assistant', 'chatbot', 'framer', 'vite', 'design'],
    cta: { label: 'Home', action: 'scroll', target: 'hero' }
  },
  {
    id: 'skills-ai-data',
    title: 'AI, Machine Learning & Data Science Skills',
    section: 'Technical Skills',
    category: 'skills',
    content: `Abir's AI & Data competencies:
• Core AI: Machine Learning, Deep Learning, Natural Language Processing (NLP), Large Language Models (LLMs), Multi-Agent Systems.
• Frameworks & Tools: LangChain, n8n automation, Scikit-learn, XGBoost, Pandas, NumPy, PyMuPDF, Pydantic.
• Data Engineering: Medallion Architecture, Data Lakehouses, Apache Airflow, Snowflake, Snowpark, MinIO.`,
    keywords: ['machine learning', 'deep learning', 'nlp', 'llms', 'langchain', 'n8n', 'scikit-learn', 'xgboost', 'pandas', 'numpy', 'data science', 'ai', 'models', 'algorithms'],
    cta: { label: 'View Skills', action: 'scroll', target: 'skills' }
  },
  {
    id: 'skills-software-web',
    title: 'Software Engineering & Full-Stack Web Skills',
    section: 'Technical Skills',
    category: 'skills',
    content: `Abir's Software & Web engineering competencies:
• Languages: Python, JavaScript (ES6+), TypeScript, C++, HTML5, CSS3/Vanilla CSS.
• Frameworks & Libraries: React.js, Node.js, Express.js, Django, Laravel, Redux.js, Tailwind CSS, Framer Motion.
• Architecture: RESTful API design, Role-Based Access Control (RBAC), asynchronous backend processing with FastAPI.`,
    keywords: ['react', 'python', 'fastapi', 'django', 'javascript', 'typescript', 'node', 'express', 'laravel', 'redux', 'tailwind', 'css', 'html', 'c++', 'full-stack', 'backend', 'frontend'],
    cta: { label: 'View Skills', action: 'scroll', target: 'skills' }
  },
  {
    id: 'skills-database-devops',
    title: 'Databases, Cloud & DevOps Skills',
    section: 'Technical Skills',
    category: 'skills',
    content: `Abir's Data Storage and Infrastructure skills:
• Relational Databases: PostgreSQL, MySQL, Oracle Database, SQLite.
• NoSQL & Caching: MongoDB, Redis.
• DevOps & Cloud: Docker containerization, Git, GitHub, Linux / Unix command line, Snowflake, Vercel deployments.`,
    keywords: ['database', 'databases', 'postgresql', 'postgres', 'mysql', 'oracle', 'mongodb', 'redis', 'docker', 'git', 'github', 'linux', 'unix', 'devops'],
    cta: { label: 'View Skills', action: 'scroll', target: 'skills' }
  },
  {
    id: 'certifications-list',
    title: 'Professional Certifications',
    section: 'Certifications',
    category: 'certifications',
    content: `Abir holds 11 verified professional certifications:
1. Oracle Cloud Infrastructure (OCI) Certified AI Foundations Associate – Oracle University.
2. The Unix Workbench – Johns Hopkins University (Linux).
3. Interactivity with JavaScript – University of Michigan.
4. Object-Oriented Programming (C++) – EPFL.
5. La recherche documentaire – École Polytechnique.
6. Python for Data Science, AI & Development – IBM.
7. Software Engineering: Design & Management – HKUST.
8. React Basics – Meta.
9. React Native – Meta.
10. Advanced Database Systems.
11. Data Structures & Algorithms.`,
    keywords: ['certifications', 'certification', 'certs', 'oracle', 'oci', 'ibm', 'meta', 'johns hopkins', 'epfl', 'polytechnique', 'credentials', 'diploma'],
    cta: { label: 'View Certifications', action: 'scroll', target: 'certifications' }
  },
  {
    id: 'education-background',
    title: 'Education & Academic Background',
    section: 'Education',
    category: 'education',
    content: `Engineering student in Artificial Intelligence and Data Engineering at EMSI (École Marocaine des Sciences de l'Ingénieur), Morocco.
Her academic curriculum focuses on:
- Machine learning theory and deep learning neural architectures
- Big data processing, data warehousing, and distributed databases
- Advanced algorithms, data structures, and mathematical optimization
- Object-oriented software engineering, system architecture, and API design.`,
    keywords: ['education', 'school', 'university', 'degree', 'emsi', 'studies', 'student', 'morocco', 'academic', 'curriculum'],
    cta: { label: 'About Abir', action: 'scroll', target: 'about' }
  },
  {
    id: 'contact-collaboration',
    title: 'Contact & Collaboration',
    section: 'Contact',
    category: 'contact',
    content: `Abir is open to internship opportunities in AI Engineering, Data Engineering, and Full-Stack Development, as well as freelance projects and technical collaborations.
Direct Contact:
• Email: abirhachlafi1@gmail.com
• LinkedIn: https://linkedin.com/in/abir-hachlafi
• GitHub: https://github.com/abir-dev0
• Resume: Downloadable PDF ("Resume.pdf") in the top navigation bar.`,
    keywords: ['contact', 'email', 'reach', 'message', 'hire', 'collaborate', 'linkedin', 'github', 'resume', 'cv'],
    cta: { label: 'Get in Touch', action: 'scroll', target: 'contact' }
  }
];

// Vocabulary dictionary for semantic vector space
const VOCABULARY = [
  'abir', 'ai', 'artificial', 'intelligence', 'data', 'lakehouse', 'medallion', 'airflow',
  'snowflake', 'snowpark', 'xgboost', 'pricing', 'streamlit', 'docker', 'minio', 'lexiva',
  'research', 'assistant', 'multi-agent', 'langchain', 'gemini', 'n8n', 'fastapi', 'literature',
  'review', 'rag', 'papers', 'agents', 'pymupdf', 'pydantic', 'erp', 'aram', 'inventory',
  'orders', 'logistics', 'production', 'chart.js', 'rbac', 'excel', 'peak', 'library',
  'books', 'laravel', 'react', 'mysql', 'minibus', 'rental', 'mvr', 'booking', 'express',
  'mongodb', 'travel', 'tourism', 'mytravelcircle', 'morocco', 'portfolio', 'machine', 'learning',
  'deep', 'nlp', 'llms', 'scikit-learn', 'pandas', 'numpy', 'python', 'django', 'javascript',
  'typescript', 'node', 'redux', 'tailwind', 'css', 'html', 'c++', 'full-stack', 'backend',
  'frontend', 'database', 'postgresql', 'postgres', 'oracle', 'redis', 'git', 'github',
  'linux', 'unix', 'devops', 'certifications', 'certification', 'certs', 'oci', 'ibm',
  'meta', 'emsi', 'education', 'internship', 'intern', 'hire', 'strengths', 'contact',
  'email', 'resume', 'cv', 'why', 'qualifications', 'job', 'analyze', 'experience'
];

const GREETING_WORDS = ['hi', 'hello', 'hey', 'greetings', 'morning', 'afternoon', 'evening', 'howdy', 'sup'];

export function isGreetingQuery(text) {
  const normalized = (text || '').toLowerCase().trim().replace(/[^a-z0-9\s]/g, '');
  const tokens = normalized.split(/\s+/).filter(Boolean);
  if (tokens.length <= 4 && tokens.some(t => GREETING_WORDS.includes(t))) {
    return true;
  }
  return false;
}

// Vectorizes text into a normalized semantic feature vector
export function vectorizeText(text) {
  const normalized = (text || '').toLowerCase().replace(/[^a-z0-9_\s]/g, ' ');
  const tokens = normalized.split(/\s+/).filter(Boolean);

  const vec = new Array(VOCABULARY.length).fill(0);

  VOCABULARY.forEach((term, idx) => {
    let score = 0;
    for (const token of tokens) {
      if (token === term) {
        score += 2.0;
      } else if (token.length >= 4 && term.length >= 4) {
        if (token.startsWith(term) || term.startsWith(token)) {
          score += 1.0;
        }
      }
    }
    vec[idx] = score;
  });

  // Calculate L2 norm for unit normalization
  let norm = 0;
  for (let i = 0; i < vec.length; i++) {
    norm += vec[i] * vec[i];
  }
  norm = Math.sqrt(norm);

  if (norm > 0) {
    for (let i = 0; i < vec.length; i++) {
      vec[i] = vec[i] / norm;
    }
  }

  return vec;
}

// Compute dot product between unit-normalized vectors (cosine similarity)
export function cosineSimilarity(vecA, vecB) {
  if (!vecA || !vecB || vecA.length !== vecB.length) return 0;
  let dot = 0;
  for (let i = 0; i < vecA.length; i++) {
    dot += vecA[i] * vecB[i];
  }
  return Math.max(0, Math.min(1, dot));
}

// Precompute vectors for all knowledge chunks
export const embeddedChunks = knowledgeChunks.map(chunk => {
  const fullText = `${chunk.title} ${chunk.section} ${chunk.content} ${chunk.keywords.join(' ')}`;
  const vector = vectorizeText(fullText);
  return {
    ...chunk,
    vector
  };
});

// Minimum threshold for query relevance
export const SIMILARITY_THRESHOLD = 0.20;

// Retrieves Top-K chunks with similarity scores
export function retrieveTopK(query, k = 4) {
  const queryVec = vectorizeText(query);
  const isGreeting = isGreetingQuery(query);

  const scored = embeddedChunks.map(chunk => ({
    chunk,
    score: cosineSimilarity(queryVec, chunk.vector)
  }));

  scored.sort((a, b) => b.score - a.score);

  const topScore = scored[0]?.score || 0;
  const isRelevant = isGreeting || topScore >= SIMILARITY_THRESHOLD;

  const topMatches = scored.slice(0, k).map(item => ({
    id: item.chunk.id,
    title: item.chunk.title,
    section: item.chunk.section,
    category: item.chunk.category,
    content: item.chunk.content,
    cta: item.chunk.cta,
    score: Math.round(item.score * 100) / 100
  }));

  return {
    topMatches,
    topScore,
    isRelevant,
    isGreeting
  };
}

// Deterministic offline response generator (Offline Mode)
export function getOfflineResponse(query) {
  if (isGreetingQuery(query)) {
    return {
      reply: "Hello! 👋 I'm Abir's AI portfolio assistant. I can answer questions about her AI & Data Engineering projects, technical skills, certifications, and academic background at EMSI. You can also paste a job description for an instant fit analysis!",
      sources: [{ title: 'About Abir Hachlafi', section: 'About' }],
      ctas: [
        { label: 'View Projects', action: 'scroll', target: 'projects' },
        { label: 'View Skills', action: 'scroll', target: 'skills' }
      ],
      mode: 'offline'
    };
  }

  const { topMatches, topScore, isRelevant } = retrieveTopK(query, 2);

  if (!isRelevant || topScore === 0 || topMatches.length === 0) {
    return {
      reply: "I don't have enough verified information about that in Abir's portfolio context. I specialize in answering questions regarding her AI projects (like Lexiva AI and the Data Lakehouse), her technical skills (Machine Learning, Python, React, PostgreSQL), certifications, or analyzing job descriptions against her profile.",
      sources: [],
      ctas: [
        { label: 'View Projects', action: 'scroll', target: 'projects' },
        { label: 'Contact Abir', action: 'scroll', target: 'contact' }
      ],
      mode: 'offline'
    };
  }

  const primary = topMatches[0];
  const sources = topMatches.filter(m => m.score > 0).map(m => ({ title: m.title, section: m.section }));
  const ctas = topMatches.filter(m => m.cta).map(m => m.cta);

  return {
    reply: `${primary.content}\n\nFeel free to explore her projects or reach out via the contact form to discuss how she can contribute to your team!`,
    sources,
    ctas: ctas.length > 0 ? [ctas[0]] : [],
    mode: 'offline'
  };
}
