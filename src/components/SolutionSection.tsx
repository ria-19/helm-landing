// src/components/SolutionSection.tsx

'use client';

import { motion } from 'framer-motion';

// This is a placeholder for your actual logo.
// For now, it's a simple text-based logo.
// Later, you can replace this with an <img /> or a custom SVG component.
const HelmLogo = () => (
  <div style={styles.logo}>
    Helm
  </div>
);

export default function SolutionSection() {
  return (
    <motion.section 
      style={styles.sectionContainer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <h2 style={styles.headline}>Introducing Helm.</h2>
      <h3 style={styles.subHeadline}>Designed for Thoughtful Professionals. Built on an Open Core.</h3>
      
      <div style={styles.contentWrapper}>
        <HelmLogo />
        <p style={styles.comingSoonText}>Coming Soon</p>
      </div>

    </motion.section>
  );
}

// --- Styles ---
const styles: { [key: string]: React.CSSProperties } = {
  sectionContainer: {
    width: '100%',
    padding: '120px 2rem', // Generous padding to create focus
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    // Adds a very subtle separator line from the top
    borderTop: '1px solid rgba(60, 60, 60, 0.1)', 
  },
  headline: {
    fontSize: 'clamp(2.5rem, 5.5vw, 3.5rem)',
    color: 'var(--text-color)',
    marginBottom: '0.5rem',
  },
  subHeadline: {
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    fontFamily: 'var(--body-font)', // Using the clean font for this subheading
    fontWeight: 400,
    color: 'var(--text-color)',
    opacity: 0.8,
    marginBottom: '4rem',
  },
  contentWrapper: {
    // This will hold the logo and "Coming Soon" text
  },
  logo: {
    fontFamily: 'var(--headline-font)',
    fontSize: 'clamp(4rem, 10vw, 7rem)',
    // A simple, elegant color for the logo text
    color: 'var(--accent-color)', 
    marginBottom: '1rem',
  },
  comingSoonText: {
    fontFamily: 'var(--body-font)',
    fontSize: '1.25rem',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    color: 'var(--text-color)',
    opacity: 0.7,
  },
};