// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import { Quintessential, DM_Sans } from 'next/font/google'; // Import Quintessential
import './globals.css';

// Setup for the new headline font (Quintessential)
const quintessential = Quintessential({
  subsets: ['latin'],
  weight: ['400'], // Quintessential only has one weight: 400 (Regular).
  variable: '--font-quintessential', // Create the CSS variable
});

// The body font setup remains the same
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
});

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
    <html lang="en" className={`${quintessential.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}