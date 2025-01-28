import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req) {
  try {
    const { userMessage } = await req.json();

    if (!userMessage || typeof userMessage !== 'string') {
      return new Response(
        JSON.stringify({
          error: 'userMessage is required and must be a string',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: userMessage }],
      model: 'deepseek-r1-distill-llama-70b',
    });

    return new Response(
      JSON.stringify({
        content: chatCompletion.choices[0]?.message?.content || '',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process your request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
