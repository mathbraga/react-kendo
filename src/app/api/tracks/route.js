import { NextResponse } from 'next/server';

export async function GET() {
  const apiEndpoint = encodeURI(process.env.API_ENDPOINT);
  const apiKey = encodeURIComponent(process.env.API_KEY);

  try {
    const response = await fetch(
      `${apiEndpoint}&api_key=${apiKey}&format=json&limit=120`
    );
    if (!response.ok) {
      throw new Error('Something went wrong with the response.');
    }
    const jsonData = await response.json();

    return NextResponse.json({ ...jsonData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
