import { NextRequest, NextResponse } from "next/server";

// Placeholder API route — currently handled client-side with decision tree
export async function POST(req: NextRequest) {
  const { symptoms } = await req.json();
  return NextResponse.json({
    recommendation: "General dental consultation recommended",
    urgency: "soon",
    treatments: ["Examination", "Treatment planning"],
    note: "This is a simplified demo recommendation",
  });
}
