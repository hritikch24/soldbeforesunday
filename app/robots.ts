import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';

const aiBots = ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'Bytespider'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }, ...aiBots.map((userAgent) => ({ userAgent, allow: '/' }))],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
