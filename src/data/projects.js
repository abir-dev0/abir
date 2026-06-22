export const projects = [
  {
    id: 'lexiva-ai',
    title: 'Lexiva AI - Research Assistant',
    shortDescription: 'Advanced AI-powered research assistant designed to automate literature reviews.',
    fullDescription: 'Lexiva AI is an advanced AI-powered research assistant designed to automate literature reviews through a multi-agent architecture. Researchers can upload scientific papers and receive both granular and high-level insights across entire research domains. The platform combines FastAPI, LangChain, Google Gemini, and n8n workflow orchestration to manage complex AI pipelines, document processing, semantic retrieval, and structured synthesis generation.',
    problemSolved: 'Literature reviews are incredibly time-consuming and cognitively demanding. Lexiva AI automates the extraction of key insights and synthesizes findings across multiple documents to identify research gaps and future directions.',
    techStack: ['Python', 'FastAPI', 'LangChain', 'n8n', 'Google Gemini', 'React', 'Vanilla CSS'],
    techStackDetails: [
      { name: 'FastAPI', role: 'High-Performance Asynchronous Backend' },
      { name: 'LangChain', role: 'Multi-Step AI Agent Orchestration' },
      { name: 'Google Gemini', role: 'Advanced Academic Text Processing' },
      { name: 'React', role: 'Modern Glassmorphism UI' },
      { name: 'PyMuPDF', role: 'Precision PDF Data Extraction' },
      { name: 'Pydantic', role: 'Structured AI Response Validation' },
      { name: 'n8n', role: 'Workflow Automation Orchestration' }
    ],
    link: '#',
    github: '#',
    image: '/projects/lexivaai.png',
    screenshots: [
      '/projects/lexivaai-1.png',
      '/projects/lexivaai-2.png',
      '/projects/lexivaai-3.png',
      '/projects/lexivaai-4.png',
      '/projects/lexivaai-5.png',
      '/projects/lexivaai-6.png',
      '/projects/lexivaai-7.png'
    ]
  },
  {
    id: 'personal-portfolio',
    title: 'Cosmic Fusion - Personal Portfolio',
    shortDescription: 'A premium, high-impact developer portfolio featuring advanced animations and a modern cosmic aesthetic.',
    fullDescription: 'This portfolio is a showcase of modern web engineering and creative design. Built with React.js and Framer Motion, it features a "Cosmic Fusion" theme with glassmorphism UI, infinite scrolling marquees, and interactive 3D-effect elements.',
    problemSolved: 'Generic portfolios often fail to make a lasting impression. This project solves that by combining technical depth with a stunning visual experience that keeps users engaged.',
    techStack: ['React.js', 'Framer Motion', 'Vite', 'Vanilla CSS'],
    techStackDetails: [
      { name: 'React.js', role: 'Component-Based Architecture and Routing' },
      { name: 'Framer Motion', role: 'Advanced UI Animations and Transitions' },
      { name: 'Vite', role: 'Lightning-Fast Development and Build Tool' },
      { name: 'Vanilla CSS', role: 'Custom Glassmorphism Design System' }
    ],
    link: '#',
    github: '#',
    image: '/projects/portfolio.png',
    screenshots: []
  },
  {
    id: 'minibus-rental',
    title: 'Minibus Rental System - MVR',
    shortDescription: 'A web application for managing minibus reservations with a user-friendly interface.',
    fullDescription: 'MVR is a specialized booking platform tailored for minibus rental services. It streamlines the entire reservation process from vehicle selection to payment.',
    problemSolved: 'Managing a fleet of minibuses manually is prone to double-bookings and scheduling conflicts. MVR automates this with a real-time calendar and availability tracker.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    techStackDetails: [
      { name: 'React.js', role: 'Frontend UI and State Management' },
      { name: 'Node.js', role: 'Backend Runtime Environment' },
      { name: 'Express.js', role: 'RESTful API Development' },
      { name: 'MongoDB', role: 'NoSQL Database for Reservations' },
      { name: 'Tailwind CSS', role: 'Responsive and Modern Styling' }
    ],
    link: '#',
    github: '#',
    image: '/projects/minibus.png',
    screenshots: [
      '/projects/minibus-2.png',
      '/projects/minibus-3.png'
    ]
  },
  {
    id: 'mytravelcircle',
    title: 'MyTravelCircle - Tourism Platform',
    shortDescription: 'A community-driven platform for exploring Moroccan cities and sharing tourist experiences.',
    fullDescription: 'MyTravelCircle is a collaborative web platform designed to promote Moroccan tourism. It allows users to discover hidden gems, share their travel stories, and contribute to a growing database of local attractions.',
    problemSolved: 'Finding authentic, user-contributed information about local Moroccan cities can be difficult. MyTravelCircle centralizes these experiences into a collaborative community hub.',
    techStack: ['Django', 'Tailwind CSS', 'Python', 'PostgreSQL', 'Community Features'],
    techStackDetails: [
      { name: 'Django', role: 'Backend Architecture and Community Features' },
      { name: 'Tailwind CSS', role: 'Modern, Responsive Design' },
      { name: 'Python', role: 'Data Management and Logic' },
      { name: 'PostgreSQL', role: 'Database Management' },
      { name: 'Community Features', role: 'User Reviews, Ratings, and Recommendations' }
    ],
    link: '#',
    github: '#',
    image: '/projects/travel.png',
    screenshots: [
      '/projects/travel-1.png',
      '/projects/travel-2.png',
      '/projects/travel-3.png',
      '/projects/travel-4.png',

    ]
  },
  {
    id: 'weather-app',
    title: 'SkyCast - Real-Time Weather App',
    shortDescription: 'A responsive weather dashboard featuring real-time data integration and a sleek UI.',
    fullDescription: 'SkyCast is a modern weather application that provides instant meteorological data for cities worldwide. Built with React.js and Tailwind CSS, it offers a high-performance, mobile-first experience with dynamic background updates based on current conditions.',
    problemSolved: 'Many weather apps are cluttered or slow. SkyCast provides a minimalist, lightning-fast interface that delivers essential weather information through seamless API integration and optimized state management.',
    techStack: ['React.js', 'Tailwind CSS', 'Weather API'],
    techStackDetails: [
      { name: 'React.js', role: 'Component Architecture and State Management' },
      { name: 'Tailwind CSS', role: 'Responsive, Utility-First Styling' },
      { name: 'OpenWeather API', role: 'Real-Time Global Weather Data' }
    ],
    link: '#',
    github: '#',
    image: '/projects/weather.png',
    screenshots: []
  },
  {
    id: 'erp',
    title: 'Full-Stack ERP System',
    shortDescription: 'A comprehensive ERP solution for managing business operations, from logistics to order processing.',
    fullDescription: 'Full-stack Enterprise Resource Planning (ERP) system designed to centralize and automate core business processes. It provides a unified platform for managing clients, orders, stock inventory, production workflows, and complex logistics operations.',
    problemSolved: 'Fragmented business data leads to inefficiencies and errors. ARAM automates workflows like order processing and inventory updates, providing real-time visibility and performance tracking for smarter decision-making.',
    techStack: ['Django', 'PostgreSQL', 'Tailwind CSS', 'Excel Export', 'Chart.js'],
    techStackDetails: [
      { name: 'Django', role: 'Full-Stack Framework and Business Logic' },
      { name: 'PostgreSQL', role: 'Database Design for Complex Business Data' },
      { name: 'Tailwind CSS', role: 'Streamlined Admin Dashboard and UI' },
      { name: 'Excel Export', role: 'API Development for Data Exchange' },
      { name: 'Chart.js', role: 'Data Visualization and Analytics' }
    ],
    link: '#',
    github: '#',
    image: '/projects/aram.png',
    screenshots: [
      '/projects/aram-1.png',
      '/projects/aram-2.png',
      '/projects/aram-3.png',
      '/projects/aram-4.png'
    ]
  },
  {
    id: 'peak-library',
    title: 'Peak Online Library Web App',
    shortDescription: 'An e-commerce platform that allows users to browse, search, and purchase books.',
    fullDescription: 'Peak Online Library is a comprehensive e-commerce solution designed for modern book enthusiasts. It features a robust backend for inventory management and a seamless frontend for a superior shopping experience.',
    problemSolved: 'Traditional library systems often lack real-time availability and user-friendly purchasing options. This project bridges that gap by providing a 24/7 digital storefront with secure transactions.',
    techStack: ['React.js', 'Laravel', 'MySQL'],
    techStackDetails: [
      { name: 'React.js', role: 'Frontend UI and State Management' },
      { name: 'Laravel', role: 'RESTful API and Authentication' },
      { name: 'MySQL', role: 'Relational Database for Books and Users' }
    ],
    link: '#',
    github: '#',
    image: '/projects/peak.png',
    screenshots: [
      '/projects/peak-1.png',
      '/projects/peak-2.png',
    ]
  },
  {
    id: 'data-lakehouse',
    title: 'E-commerce Data Lakehouse Platform',
    shortDescription: 'A dual-architecture Data Lakehouse implementation (On-Premise & Cloud) featuring a Medallion Architecture and ML-based Smart Pricing.',
    fullDescription: 'This project focuses on the design and implementation of a modern Data Lakehouse platform for an e-commerce use case. It implements the Medallion Architecture (Bronze, Silver, Gold layers) and compares two complementary architectures: an On-Premise solution (Docker, MinIO, Apache Airflow) and a Cloud-based solution (Snowflake, Snowpark). Additionally, it integrates a Machine Learning module for Smart Pricing using XGBoost, and an interactive Streamlit dashboard for real-time sales and KPIs visualization.',
    problemSolved: 'Organizations struggle with efficient storage, transformation, and analysis of large data volumes. This platform ensures progressive data processing while combining advanced analytics to support business decision-making and operational efficiency.',
    techStack: ['Docker', 'MinIO', 'Apache Airflow', 'Snowflake', 'Snowpark', 'XGBoost', 'Streamlit', 'Pandas'],
    techStackDetails: [
      { name: 'Apache Airflow', role: 'Data Pipeline Orchestration' },
      { name: 'Snowflake & Snowpark', role: 'Cloud Data Warehousing & Processing' },
      { name: 'MinIO & Docker', role: 'On-Premise Storage & Containerization' },
      { name: 'XGBoost', role: 'Machine Learning for Smart Pricing' },
      { name: 'Streamlit', role: 'Interactive Dashboard & Analytics' }
    ],
    link: '#',
    github: '#',
    image: '/projects/streamlit1.png',
    screenshots: [
      '/projects/streamlit2.png',
      '/projects/streamlit3.png',
      '/projects/streamlit4.png',
    ]
  }

  /*
  {
    id: 'sign-language',
    title: 'Sign Language Real-Time Translation',
    shortDescription: 'Developed a real-time sign language translation system using CNNs.',
    fullDescription: 'A cutting-edge AI project that bridges the communication gap between the deaf community and non-signers by translating hand gestures into text in real-time.',
    problemSolved: 'Deaf individuals often face barriers in spontaneous communication. This tool provides a portable, real-time translator that works with standard webcams.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
    techStackDetails: [
      { name: 'TensorFlow', role: 'Deep Learning Model Training' },
      { name: 'OpenCV', role: 'Real-time Video Processing' },
      { name: 'CNN', role: 'Image Recognition Architecture' }
    ],
    link: '#',
    github: '#',
    image: '/projects/sign_language.png',
    screenshots: [
      '/projects/sign-1.png',
      '/projects/sign-2.png'
    ]
  },
  {
    id: 'ai-literature',
    title: 'AI Literature Review Assistant',
    shortDescription: 'Built an intelligent assistant to automate literature reviews.',
    fullDescription: 'Leveraging Multi-Agent Systems (SMA), this assistant analyzes hundreds of research papers to synthesize information and identify gaps in existing literature.',
    problemSolved: 'Literature reviews are incredibly time-consuming for researchers. This AI automates the "grunt work" of summarizing and comparing papers.',
    techStack: ['Python', 'n8n', 'LLMs'],
    techStackDetails: [
      { name: 'Python', role: 'Scraping and Data Processing' },
      { name: 'n8n', role: 'Workflow Automation' },
      { name: 'LLMs', role: 'Content Analysis and Synthesis' }
    ],
    link: '#',
    github: '#',
    image: '/projects/ai_assistant.png',
    screenshots: [
      '/projects/ai-1.png',
      '/projects/ai-2.png'
    ]
  },
  {
    id: 'data-lakehouse',
    title: 'Modern Data Lakehouse Platform',
    shortDescription: 'Designed a Data Lakehouse architecture with an end-to-end data pipeline.',
    fullDescription: 'A scalable data architecture that combines the flexibility of a data lake with the performance of a data warehouse, including a smart ML-based pricing model.',
    problemSolved: 'Siloed data prevents effective business intelligence. This lakehouse unifies data for both reporting and advanced machine learning.',
    techStack: ['Python', 'Spark', 'SQL', 'Data Lakehouse', 'ML'],
    techStackDetails: [
      { name: 'Spark', role: 'Distributed Data Processing' },
      { name: 'SQL', role: 'Analytical Queries' },
      { name: 'ML', role: 'Smart Pricing Predictions' }
    ],
    link: '#',
    github: '#',
    image: '/projects/data_lakehouse.png',
    screenshots: [
      '/projects/lakehouse-1.png'
    ]
  },
  {
    id: 'weather-pipeline',
    title: 'Weather Data Pipeline',
    shortDescription: 'Developed a data pipeline for collecting and analyzing weather data.',
    fullDescription: 'An ETL pipeline that aggregates weather data from multiple APIs into a Snowflake cloud warehouse for historical analysis and forecasting.',
    problemSolved: 'Raw weather data is messy and fragmented. This pipeline cleans, transforms, and stores it in a way that is ready for analysis.',
    techStack: ['Python', 'APIs', 'ETL', 'Snowflake', 'SQL'],
    techStackDetails: [
      { name: 'Python', role: 'API Integration and ETL logic' },
      { name: 'Snowflake', role: 'Cloud Data Storage' },
      { name: 'SQL', role: 'Data Transformation' }
    ],
    link: '#',
    github: '#',
    image: '/projects/weather_pipeline.png',
    screenshots: [
      '/projects/weather-1.png'
    ]
  }
  */
];
