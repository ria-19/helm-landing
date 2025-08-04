// src/components/SignupSection.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SignupSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); // To style success vs. error messages
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. User-Correctable Error: Provide helpful feedback.
    if (!email || !email.includes('@')) {
      setIsError(true);
      setMessage('Please enter a valid email address.');
      return;
    }
    
    setIsLoading(true);
    setMessage('Processing...');
    setIsError(false); // Reset error state on new submission

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      // 2. Success Path: Provide positive feedback.
      // This runs for new users AND duplicate users, ensuring consistent feedback.
      if (response.ok && data.success) {
        setIsError(false);
        setMessage("Success! We've sent a confirmation link to your inbox. Please check your email to claim your spot.");
        setEmail(''); // Clear input on success
        
        // Message disappears after 8 seconds.
        setTimeout(() => {
          setMessage('');
        }, 8000); 
      } else {
        // 3. System Error (from API): Fail silently for the user.
        // We log the error for ourselves but don't show it.
        console.error('API Error:', data.error || 'Unknown API error');
        setMessage(''); // Reset the message, form is ready for another try.
      }
    } catch (error) {
      // 4. System Error (Network/Fetch): Fail silently for the user.
      // This catches when the API is down or user is offline.
      console.error('Frontend Fetch Error:', error);
      setMessage(''); // Reset the message.
    } finally {
      setIsLoading(false); // Always re-enable the form.
    }
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
        We&apos;re building Helm for—and with—a community of professionals who demand better. Join us to shape the future of respectful AI and be the first to reclaim control of your workflow.
      </p>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your work email" 
          style={styles.emailInput} 
          required 
          disabled={isLoading}
        />
        <button 
          type="submit" 
          style={{ ...styles.submitButton, ...(isLoading ? styles.submitButtonDisabled : {}) }} 
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Request to Join'}
        </button>
      </form>
      {/* Conditionally apply error or success styling */}
      {message && <p style={isError ? styles.formMessageError : styles.formMessageSuccess}>{message}</p>}
    </motion.section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  sectionContainer: { width: '100%', maxWidth: '800px', margin: '0 auto', padding: '100px 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' },
  headline: { fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' },
  subHeadline: { fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '2.5rem', opacity: 0.9 },
  form: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '500px' },
  emailInput: { width: '100%', padding: '1rem', fontSize: '1rem', fontFamily: 'var(--body-font)', border: '1px solid rgba(31, 4, 0, 0.3)', borderRadius: '8px', backgroundColor: '#fff', marginBottom: '1rem', textAlign: 'center' },
  submitButton: { width: '100%', backgroundColor: 'var(--accent-color)', color: '#ffffff', fontFamily: 'var(--body-font)', fontSize: '1.1rem', fontWeight: 500, padding: '1rem 2.5rem', border: 'none', borderRadius: '8px', cursor: 'pointer', textDecoration: 'none', boxShadow: '0px 4px 10px -2px rgba(31, 4, 0, 0.3)', transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease' },
  submitButtonDisabled: { backgroundColor: '#9ca3af', cursor: 'not-allowed' },
  formMessageError: { marginTop: '1.5rem', fontSize: '1rem', color: '#b91c1c', fontWeight: 500 },
  formMessageSuccess: { marginTop: '1.5rem', fontSize: '1rem', color: '#166534', fontWeight: 500 },
};