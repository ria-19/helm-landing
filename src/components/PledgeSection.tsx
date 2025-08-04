// src/components/PledgeSection.tsx

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const principles: { [key: string]: string } = {
  transcription: 'Accurate, automated meeting transcription for Zoom, Google Meet, and more. Designed to handle diverse accents and complex terminology.',
  summaries: 'Receive a concise, automated meeting summary that highlights key decisions and action items, so you can focus on the outcome, not the noise.',
  privacy: 'A truly discreet AI note taker that respects your conversations. No visible bot participant, just the support you need, when you need it.'
};

export default function PledgeSection() {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tooltipVariants = {
    hidden: { opacity: 0, y: 15, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <section style={styles.sectionContainer}>
      <AnimatePresence>
        {hoveredKey && (
          <motion.div
            style={{
              ...styles.tooltip,
              // Adjust tooltip position to avoid direct collision with the cursor
              top: mousePosition.y + 24,
              left: mousePosition.x + 24,
            }}
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {principles[hoveredKey]}
          </motion.div>
        )}
      </AnimatePresence>

      <h2 style={styles.headline}>The Helm Pledge: Our Foundation for a Better Assistant.</h2>
      <p style={styles.paragraph}>
        We believe a true AI assistant must be built on trust and competence. 
        It should deliver flawless{' '}
        {/* --- FIX: Correct event handlers and style application --- */}
        <span style={styles.highlight} onMouseEnter={() => setHoveredKey('transcription')} onMouseLeave={() => setHoveredKey(null)}>
          transcription
        </span>{' '}
        for all your important conversations, provide intelligent{' '}
        {/* --- FIX: Correct event handlers and style application --- */}
        <span style={styles.highlight} onMouseEnter={() => setHoveredKey('summaries')} onMouseLeave={() => setHoveredKey(null)}>
          summaries
        </span>{' '}
        to save you time, and always guarantee your{' '}
        {/* --- FIX: Correct event handlers and style application --- */}
        <span style={styles.highlight} onMouseEnter={() => setHoveredKey('privacy')} onMouseLeave={() => setHoveredKey(null)}>
          privacy
        </span>{' '}
        with a discreet, non-intrusive presence. These are the table stakes... and we&apos;re just getting started.
      </p>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  sectionContainer: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '120px 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderTop: '1px solid rgba(31, 4, 0, 0.1)',
  },
  headline: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    marginBottom: '3rem',
    maxWidth: '700px',
  },
  paragraph: {
    fontFamily: 'var(--body-font)',
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    lineHeight: 1.8,
    maxWidth: '800px',
    color: 'var(--text-color)',
    opacity: 0.9,
  },
  highlight: {
    color: 'var(--accent-color)',
    cursor: 'pointer',
    borderBottom: '2px dotted rgba(119, 135, 192, 0.5)',
    fontWeight: 500
  },
  tooltip: {
    position: 'fixed',
    zIndex: 100,
    padding: '1rem 1.5rem',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(31, 4, 0, 0.1)',
    borderRadius: '12px',
    boxShadow: '0px 8px 20px -5px rgba(31, 4, 0, 0.2)',
    maxWidth: '350px',
    textAlign: 'left',
    fontFamily: 'var(--body-font)',
    fontSize: '1rem',
    lineHeight: 1.6,
    pointerEvents: 'none', // Important: allows mouse to pass through the tooltip
  },
};