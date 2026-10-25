import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    success: true,
    message: 'Idea submitted successfully. A review team will assess it soon.'
  });
}
