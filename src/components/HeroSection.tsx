// src/components/HeroSection.tsx

'use client';

// --- FIX: useEffect is now needed in the Ticker as well ---
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- FIX: This component is now hydration-safe ---
const Ticker = () => {
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [isMounted, setIsMounted] = useState(false);

  // This effect runs ONLY on the client, after the component has mounted
  useEffect(() => {
    setIsMounted(true); // Mark that we are now on the client

    const interval = setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures it runs once on mount

  // If the component has not mounted yet (i.e., we're on the server or in the initial render), render nothing.
  if (!isMounted) {
    return null;
  }

  // Once mounted, render the ticker.
  return (
    <div style={styles.tickerContainer}>
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          style={{
            ...styles.tickerNumber,
            opacity: i === seconds ? 1 : 0.2,
            transform: i === seconds ? 'scale(1.5)' : 'scale(1)',
          }}
        >
          {i.toString().padStart(2, '0')}
        </span>
      ))}
    </div>
  );
};


export default function HeroSection() {
  const costPerSecond = 50416;
  const [currentCost, setCurrentCost] = useState(0);

  useEffect(() => {
    const calculateInitialCost = () => {
      const now = new Date();
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0); 
      const secondsElapsed = Math.max(0, (now.getTime() - startOfDay.getTime()) / 1000);
      return secondsElapsed * costPerSecond;
    };
    setCurrentCost(calculateInitialCost());
    const interval = setInterval(() => setCurrentCost(prev => prev + costPerSecond), 1000);
    return () => clearInterval(interval);
  }, [costPerSecond]);

  return (
    <div style={styles.heroContainer}>
      <Ticker />
      <motion.div style={styles.contentOverlay} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }}>
        <div style={styles.costCounter}>
          ${Math.floor(currentCost).toLocaleString('en-US')}
        </div>
        <p style={styles.costLabel}>Collective Cost of Unproductive Meetings Today</p>
        
        <h1 style={styles.headline}>Take the Helm of Your Day.</h1>
        <p style={styles.subHeadline}>
        The modern professional is drowning in digital noise. We&apos;re building the AI meeting assistant that reclaims your time, respectfully. No intrusive bots, just the clarity and focus you need to do your best work.
        </p>
      </motion.div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
    heroContainer: { width: '100vw', height: '100vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', overflow: 'hidden' },
    tickerContainer: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', display: 'flex', justifyContent: 'space-between', zIndex: 1, opacity: 0.1, pointerEvents: 'none' },
    tickerNumber: { fontFamily: 'monospace', fontSize: '2rem', color: 'var(--text-color)', transition: 'opacity 0.5s ease, transform 0.5s ease' },
    contentOverlay: { position: 'relative', zIndex: 2, padding: '2rem' },
    costCounter: { fontFamily: 'var(--headline-font)', fontSize: 'clamp(4rem, 12vw, 8rem)', fontWeight: '700', lineHeight: 1, color: 'var(--text-color)' },
    costLabel: { fontFamily: 'var(--body-font)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.7, marginTop: '0.5rem' },
    headline: { fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginTop: '3rem', lineHeight: 1.2 },
    subHeadline: { fontFamily: 'var(--body-font)', fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', margin: '1rem auto', maxWidth: '600px', lineHeight: 1.6, opacity: 0.9 },
};