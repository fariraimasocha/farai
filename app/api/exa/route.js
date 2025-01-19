import { NextResponse } from 'next/server';
import Exa from 'exa-js';

const EXA_API_KEY = process.env.EXA_API_KEY;
const exa = new Exa(EXA_API_KEY);

export async function POST(request) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      );
    }

    if (!EXA_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const results = await exa.search(query, {
      numResults: 10,
      highlights: true,
      useAutoprompt: true,
    });
    console.log(results);

    return NextResponse.json(results);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 500 }
    );
  }
}
