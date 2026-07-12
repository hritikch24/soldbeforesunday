import { GROK_MODEL, SITE_NAME } from './config';

// Scores an incoming lead with Grok (x.ai). Returns "8/10 — summary…" or null.
export async function scoreLead(data: Record<string, unknown>): Promise<string | null> {
  const key = process.env.GROK_API_KEY;
  if (!key) return null;
  try {
    const r = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: GROK_MODEL,
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
