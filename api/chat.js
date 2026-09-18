// api/chat.js
// Vercel Serverless Function: Agentic RAG Pipeline with Gemini, Vector Retrieval & Job Description Matching.

import { retrieveTopK, getOfflineResponse, knowledgeChunks } from './_data/knowledge.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { message, mode = 'chat', history = [] } = req.body || {};

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Message text is required.' });
  }

  const cleanMessage = message.trim();
  const apiKey = process.env.GEMINI_API_KEY;
  const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

  // --- 1. JOB DESCRIPTION ANALYZER MODE ---
  if (mode === 'job_match') {
    if (!apiKey) {
      // Deterministic fallback for job matching if no API key is available
      return res.status(200).json({
        reply: `### 📋 Job Fit Overview (Offline Mode)\n\nI have received your job description! To run deep comparative semantic reasoning on your job posting, configure the **GEMINI_API_KEY** on Vercel.\n\n**Abir's Core Qualifications at a Glance:**\n• **AI & Machine Learning:** Multi-agent systems (Lexiva AI), XGBoost smart pricing (Data Lakehouse), LangChain, n8n, Scikit-learn, Pandas, NumPy.\n• **Full-Stack & APIs:** Python, FastAPI, Django, React.js, PostgreSQL, Docker, Git.\n• **Certification:** Oracle Cloud Infrastructure (OCI) Certified AI Foundations Associate.\n\nFeel free to explore her live projects below or reach out directly at **abirhachlafi1@gmail.com**!`,
        sources: [
          { title: 'Why Hire Abir for an AI & Data Internship', section: 'Career & Strengths' },
          { title: 'Technical Skills', section: 'Skills' }
        ],
        ctas: [
          { label: 'View Projects', action: 'scroll', target: 'projects' },
          { label: 'Contact Abir', action: 'scroll', target: 'contact' }
        ],
        mode: 'offline'
      });
    }

    try {
      const fullContext = knowledgeChunks.map(c => `[${c.section} - ${c.title}]:\n${c.content}`).join('\n\n');

      const jobPrompt = `You are an expert AI Career Intelligence Agent representing Abir Hachlafi.
You are analyzing a job description or internship role against Abir's verified portfolio context below.

STRICT INSTRUCTIONS:
1. Ground your analysis ONLY on the provided portfolio context. Do NOT invent experiences, tools, or dates.
2. Structure your analysis clearly using these exact Markdown headings:

### 💼 Relevant Experience & Strengths
List specific strengths and matches using checkmarks (e.g. "✓ Python & FastAPI for AI backend services").

### 🚀 Relevant Projects
Highlight 1-3 of Abir's actual projects that demonstrate the requirements (e.g. • **Lexiva AI** for multi-agent literature reviews, • **Data Lakehouse** for data engineering & XGBoost smart pricing, • **ARAM ERP** for full-stack systems).

### 🛠️ Technologies Aligned
List aligned programming languages, frameworks, databases, and tools.

### 🔍 Requirements Not Found in Portfolio
List prerequisites or technologies mentioned in the job posting that are NOT explicitly documented in Abir's portfolio context.
CRITICAL RULE: Phrase this section neutrally as "Requirements not explicitly documented in the portfolio". NEVER state or imply that Abir does not know them or cannot quickly learn them.

### 🎓 Relevant Certifications & Education
Mention EMSI (AI & Data Engineering) and relevant credentials like Oracle Cloud Infrastructure (OCI) Certified AI Foundations Associate or IBM Python for Data Science & AI.

### 🎯 Summary & Recommendation
A concise, encouraging 2-sentence closing on why Abir is a strong candidate for this role.

PORTFOLIO CONTEXT:
${fullContext}

JOB DESCRIPTION TO ANALYZE:
${cleanMessage}`;

      const geminiResponse = await callGemini(apiKey, modelName, jobPrompt, []);
      return res.status(200).json({
        reply: geminiResponse,
        sources: [
          { title: 'Portfolio Projects & Skills', section: 'Comprehensive Context' },
          { title: 'Oracle Cloud OCI AI Foundations', section: 'Certifications' }
        ],
        ctas: [
          { label: 'View Projects', action: 'scroll', target: 'projects' },
          { label: 'Contact Abir', action: 'scroll', target: 'contact' }
        ],
        mode: 'rag'
      });
    } catch (err) {
      console.error('Gemini Job Matcher error:', err.message);
      // Fallback to offline response
      const fallback = getOfflineResponse(cleanMessage);
      return res.status(200).json(fallback);
    }
  }

  // --- 2. STANDARD CONVERSATION (RAG MODE) ---
  const { topMatches, topScore, isRelevant, isGreeting } = retrieveTopK(cleanMessage, 4);

  // If query is outside portfolio scope and not a greeting:
  if (!isRelevant && !isGreeting) {
    return res.status(200).json({
      reply: "I don't have enough verified information about that in Abir's portfolio context. I specialize in answering questions regarding her AI & Data Engineering projects (like Lexiva AI and the Data Lakehouse), technical skills (Machine Learning, Python, React, PostgreSQL), certifications, or analyzing job descriptions against her profile.",
      sources: [],
      ctas: [
        { label: 'View Projects', action: 'scroll', target: 'projects' },
        { label: 'Contact Abir', action: 'scroll', target: 'contact' }
      ],
      mode: 'rag'
    });
  }

  // If no API key configured, use Offline Mode
  if (!apiKey) {
    const offlineReply = getOfflineResponse(cleanMessage);
    return res.status(200).json(offlineReply);
  }

  // Call Gemini with grounded context
  try {
    const contextText = topMatches.map(m => `[Source: ${m.title} (${m.section}) - Similarity: ${m.score}]:\n${m.content}`).join('\n\n');

    const systemInstruction = `You are Abir Hachlafi's official AI Portfolio Assistant.
Your mission is to represent Abir warmly, accurately, and professionally to recruiters, engineers, and visitors.

STRICT ANTI-HALLUCINATION RULES:
1. Answer using ONLY the supplied portfolio context below.
2. NEVER invent:
   - companies, past employers, or client names
   - years of professional experience
   - certifications not listed in the context
   - projects not described in the context
   - technologies not mentioned
3. If asked about something not present in the context, explicitly state that you don't have that information in Abir's portfolio and guide the visitor to contact Abir directly at abirhachlafi1@gmail.com.
4. Do NOT pretend to be Abir ("I am Abir"). You are an AI assistant representing her portfolio ("Abir built...", "In her project...").
5. Keep your answer engaging, direct, and well-structured using clear Markdown with bullet points when listing features or tech.

PORTFOLIO CONTEXT:
${contextText}`;

    const geminiReply = await callGemini(apiKey, modelName, cleanMessage, history, systemInstruction);

    const sources = topMatches.map(m => ({ title: m.title, section: m.section }));
    const ctas = topMatches.filter(m => m.cta).map(m => m.cta);

    return res.status(200).json({
      reply: geminiReply,
      sources,
      ctas: ctas.length > 0 ? [ctas[0]] : [],
      mode: 'rag'
    });
  } catch (err) {
    console.error('Gemini RAG generation error:', err.message);
    // Graceful fallback to offline engine
    const offlineReply = getOfflineResponse(cleanMessage);
    return res.status(200).json(offlineReply);
  }
}

// Helper to call Google Gemini API with fallback across model aliases
async function callGemini(apiKey, model, userMessage, history = [], systemInstruction = '') {
  const modelsToTry = [model, 'gemini-2.0-flash', 'gemini-1.5-flash'];
  // Deduplicate
  const uniqueModels = [...new Set(modelsToTry.filter(Boolean))];

  let lastError = null;

  for (const currentModel of uniqueModels) {
    try {
      const contents = [];

      // Add conversation history if available
      if (Array.isArray(history) && history.length > 0) {
        for (const item of history.slice(-6)) {
          if (item.text && (item.role === 'user' || item.role === 'model')) {
            contents.push({
              role: item.role,
              parts: [{ text: item.text }]
            });
          }
        }
      }

      // Add current message
      contents.push({
        role: 'user',
        parts: [{ text: userMessage }]
      });

      const requestBody = {
        contents
      };

      if (systemInstruction) {
        requestBody.systemInstruction = {
          parts: [{ text: systemInstruction }]
        };
      }

      requestBody.generationConfig = {
        temperature: 0.3,
        maxOutputTokens: 800
      };

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody)
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Model ${currentModel} failed (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      const textOutput = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (textOutput) {
        return textOutput;
      }
    } catch (err) {
      lastError = err;
      console.warn(`Attempt with ${currentModel} failed:`, err.message);
    }
  }

  throw lastError || new Error('All Gemini model invocations failed.');
}
