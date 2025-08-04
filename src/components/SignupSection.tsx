// src/components/SignupSection.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SignupSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setMessage('Subscribing...');
    setTimeout(() => {
      setMessage("Success! You're on the list. We'll be in touch.");
      setEmail('');
    }, 1500);
  };

  return (
    <motion.section 
      id="signup"
      style={styles.sectionContainer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 style={styles.headline}>Become a Founding Partner.</h2>
      <p style={styles.subHeadline}>
        We're building Helm for—and with—a community of professionals who demand better. Join us to shape the future of respectful AI and be the first to reclaim control of your workflow.
      </p>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your work email" style={styles.emailInput} required />
        <button type="submit" style={styles.submitButton}>Request to Join</button>
      </form>
      {message && <p style={styles.formMessage}>{message}</p>}
    </motion.section>
  );
}

// --- FIX: The styles object was missing ---
const styles: { [key: string]: React.CSSProperties } = {
  sectionContainer: { width: '100%', maxWidth: '800px', margin: '0 auto', padding: '100px 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' },
  headline: { fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' },
  subHeadline: { fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '2.5rem', opacity: 0.9 },
  form: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '500px' },
  emailInput: { width: '100%', padding: '1rem', fontSize: '1rem', fontFamily: 'var(--body-font)', border: '1px solid rgba(31, 4, 0, 0.3)', borderRadius: '8px', backgroundColor: '#fff', marginBottom: '1rem', textAlign: 'center' },
  submitButton: {
    width: '100%',
    backgroundColor: 'var(--accent-color)',
    color: '#ffffff',
    fontFamily: 'var(--body-font)',
    fontSize: '1.1rem',
    fontWeight: 500,
    padding: '1rem 2.5rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    // --- FIX: More natural, softer shadow ---
    boxShadow: '0px 4px 10px -2px rgba(31, 4, 0, 0.3)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  formMessage: { marginTop: '1.5rem', fontSize: '1rem', color: 'var(--text-color)' },
};