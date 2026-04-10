import { NextRequest, NextResponse } from "next/server";

// Placeholder API route — connect to Claude API or custom LLM backend
export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const lastMessage = messages?.[messages.length - 1]?.content ?? "";

  // Mock response for demo
  const response = {
    id: `mock-${Date.now()}`,
    content: `Thank you for your question about "${lastMessage.slice(0, 40)}...". This is a demo response. Connect this endpoint to your Claude API or knowledge base to enable real AI conversations.`,
  };

  return NextResponse.json(response);
}
