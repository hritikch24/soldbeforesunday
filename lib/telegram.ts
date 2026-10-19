export async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: text.slice(0, 4000), parse_mode: 'HTML' }),
    });
    if (!response.ok) return false;
    const result = await response.json();
    return result.ok === true;
  } catch (e) {
    console.error('telegram send failed', e);
    return false;
  }
}
