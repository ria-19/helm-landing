// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

// --- FINAL: Updated metadata for SEO, brand identity, and community building ---
export const metadata: Metadata = {
  title: "Helm | The AI Meeting Assistant for Thoughtful Professionals",
  description: "Tired of intrusive bots and inaccurate notes? Helm is the respectful AI assistant that puts you in control. Get flawless transcription, intelligent summaries, and own your workflow.",
  keywords: [
    "AI meeting assistant", 
    "Fathom alternative", 
    "Otter.ai alternative", 
    "discreet AI note taker", 
    "AI meeting summary", 
    "Google Meet transcription", 
    "Zoom transcription", 
    "open source AI",
    "respectful AI",
    "own your workflow"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}