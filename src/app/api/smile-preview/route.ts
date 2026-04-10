import { NextRequest, NextResponse } from "next/server";

// Placeholder API route — connect to image processing backend
export async function POST(req: NextRequest) {
  // In production: process the uploaded image through an AI model
  // Return before/after URLs or base64 encoded image
  return NextResponse.json({
    success: true,
    message: "Smile preview processed",
    preview_url: null, // Will be populated by real AI backend
    note: "Demo mode — connect to AI image processing backend",
  });
}
