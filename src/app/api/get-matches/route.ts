import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate fetching matches from a database
  const matches = [
    { name: 'Jane Smith', score: 95 },
    { name: 'Alice Johnson', score: 90 },
  ];

  // Return the matches as a response
  return NextResponse.json({ success: true, matches });
}