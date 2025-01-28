import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req) {
  const { userMessage } = await req.json();

  try {
    const chatCompletion = await getGroqChatCompletion(userMessage);
    return new Response(
      JSON.stringify({
        content: chatCompletion.choices[0]?.message?.content || '',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error fetching data from GROQ:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch data from GROQ' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
async function getGroqChatCompletion(userMessage, model) {
  return groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: userMessage,
      },
    ],
    model: 'llama-3.3-70b-versatile',
  });
}
