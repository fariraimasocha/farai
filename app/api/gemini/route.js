import { NextResponse } from 'next/server';

export async function POST(req) {
  const prompt = await req.json();

  try {
    const response = await fetch(
      'URL_ADDRESSativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-google-api-key': process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from GEMINI');
    }
    const data = await response.json();
    return NextResponse.json({
      content: data.choices[0]?.content?.parts[0]?.text || '',
    });
  } catch (error) {
    console.error('Error fetching data from GEMINI:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
