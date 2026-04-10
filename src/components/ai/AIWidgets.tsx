"use client";
import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });
const SmilePreview = dynamic(() => import("./SmilePreview"), { ssr: false });
const SymptomChecker = dynamic(() => import("./SymptomChecker"), { ssr: false });

export default function AIWidgets() {
  return (
    <>
      <ChatWidget />
      <SmilePreview />
      <SymptomChecker />
    </>
  );
}
