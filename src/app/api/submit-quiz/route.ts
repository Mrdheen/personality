import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json(); // Parse the JSON request body

    if (!data) {
      return NextResponse.json(
        { success: false, error: "Invalid data received" },
        { status: 400 } // Bad Request
      );
    }

    // Simulated matchmaking logic
    const matches = [
      { name: 'Jane Smith', score: 95 },
      { name: 'Alice Johnson', score: 90 },
    ];

    return NextResponse.json({ success: true, matches });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Explicitly reject unsupported HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: "Method Not Allowed" },
    { status: 405 }
  );
}

