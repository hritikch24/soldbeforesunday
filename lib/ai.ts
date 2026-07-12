import { AI_MODEL, SITE_NAME } from './config';

// Scores an incoming lead with Groq (api.groq.com, OpenAI-compatible).
// Returns "N/10 — summary…" or null. Skipped gracefully if GROQ_API_KEY unset.
export async function scoreLead(data: Record<string, unknown>): Promise<string | null> {
  const key = process.env.GROQ_API_KEY;
  if (!key) return null;
  try {
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: AI_MODEL,
        max_tokens: 120,
        messages: [
          {
            role: 'system',
            content: `You score incoming leads for ${SITE_NAME}, a lead-generation site. Reply in ONE line: "N/10 — <15-word summary of urgency and value>". 10 = urgent, motivated, complete contact info. 1 = junk/spam.`,
          },
          { role: 'user', content: JSON.stringify(data).slice(0, 2000) },
        ],
      }),
    });
    if (!r.ok) return null;
    const j = (await r.json()) as { choices?: { message?: { content?: string } }[] };
    return j.choices?.[0]?.message?.content?.trim().slice(0, 300) ?? null;
  } catch {
    return null;
  }
}
