// scripts/generate_embeddings.js
// Utility script: Precomputes true 768-dimensional Google Gemini embeddings for knowledge chunks.
// Run with: node scripts/generate_embeddings.js (ensure GEMINI_API_KEY is set in environment or .env)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { knowledgeChunks } from '../api/_data/knowledge.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = process.env.GEMINI_API_KEY;

async function generateEmbeddings() {
  if (!apiKey) {
    console.log('⚠️ GEMINI_API_KEY is not set.');
    console.log('Using deterministic semantic vectors included in api/_data/knowledge.js.');
    console.log('To generate 768-dim Gemini embeddings: set GEMINI_API_KEY=your_key and re-run.');
    return;
  }

  console.log(`Generating embeddings for ${knowledgeChunks.length} portfolio chunks using text-embedding-004...`);

  const embeddedData = [];

  for (const chunk of knowledgeChunks) {
    const textToEmbed = `${chunk.title}: ${chunk.content} Keywords: ${chunk.keywords.join(', ')}`;
    console.log(`Embedding [${chunk.id}]...`);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'models/text-embedding-004',
            content: {
              parts: [{ text: textToEmbed }]
            }
          })
        }
      );

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Embedding API error ${response.status}: ${errText}`);
      }

      const data = await response.json();
      const embeddingValues = data?.embedding?.values || [];

      embeddedData.push({
        id: chunk.id,
        title: chunk.title,
        section: chunk.section,
        category: chunk.category,
        content: chunk.content,
        cta: chunk.cta,
        embedding: embeddingValues
      });
    } catch (err) {
      console.error(`Failed to embed ${chunk.id}:`, err.message);
    }
  }

  const outputPath = path.resolve(__dirname, '../api/_data/gemini_embeddings.json');
  fs.writeFileSync(outputPath, JSON.stringify(embeddedData, null, 2), 'utf-8');
  console.log(`✅ Saved ${embeddedData.length} embeddings to ${outputPath}`);
}

generateEmbeddings();
