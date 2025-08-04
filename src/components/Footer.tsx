// src/components/Footer.tsx

export default function Footer() {
    return (
      <footer style={styles.footerContainer}>
        <div style={styles.contentWrapper}>
          <div style={styles.brandColumn}>
            <h3 style={styles.brandName}>Helm</h3>
            {/* --- FINAL: Updated to the official brand tagline --- */}
            <p style={styles.mission}>Own Your Workflow.</p>
          </div>
          <div style={styles.linksColumn}>
            <h4 style={styles.columnTitle}>Product</h4>
            <a href="#signup" style={styles.link}>Request to Join</a>
          </div>
          <div style={styles.linksColumn}>
            <h4 style={styles.columnTitle}>Company</h4>
            {/* You can create simple pages for these later */}
            <a href="#" style={styles.link}>About Us</a>
            <a href="#" style={styles.link}>Privacy Policy</a>
            <a href="#" style={styles.link}>Terms of Service</a>
          </div>
          <div style={styles.linksColumn}>
            {/* --- FINAL: Updated community links for trust and engagement --- */}
            <h4 style={styles.columnTitle}>Community</h4>
            <a href="#" style={styles.link}>Our Manifesto</a>
            <a href="#" style={styles.link}>Join our Slack</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.link}>View on GitHub</a>
          </div>
        </div>
        <p style={styles.copyright}>© {new Date().getFullYear()} Helm Technologies Inc. All rights reserved.</p>
      </footer>
    );
  }
    
  const styles: { [key: string]: React.CSSProperties } = {
    footerContainer: {
      width: '100%',
      padding: '4rem 2rem 2rem',
      borderTop: '1px solid rgba(31, 4, 0, 0.1)',
      backgroundColor: 'rgba(31, 4, 0, 0.02)',
    },
    contentWrapper: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '2rem',
      marginBottom: '3rem',
    },
    brandColumn: {
      flex: '2 1 250px',
    },
    brandName: {
      fontFamily: 'var(--headline-font)',
      fontSize: '2rem',
      color: 'var(--text-color)',
      marginBottom: '0.5rem',
    },
    mission: {
      fontFamily: 'var(--body-font)',
      fontSize: '1rem',
      opacity: 0.8,
      maxWidth: '300px',
    },
    linksColumn: {
      flex: '1 1 150px',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    columnTitle: {
      fontFamily: 'var(--body-font)',
      fontWeight: '500',
      fontSize: '1rem',
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      opacity: 0.6,
    },
    link: {
      fontFamily: 'var(--body-font)',
      color: 'var(--text-color)',
      opacity: 0.9,
      textDecoration: 'none',
      transition: 'opacity 0.2s',
    },
    copyright: {
      textAlign: 'center',
      fontSize: '0.9rem',
      opacity: 0.5,
      borderTop: '1px solid rgba(31, 4, 0, 0.1)',
      paddingTop: '2rem',
      marginTop: '2rem',
    }
  };