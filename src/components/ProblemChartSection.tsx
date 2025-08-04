// src/components/ProblemChartSection.tsx

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const finalChartData = [
  { quarter: 'Q1 2024', solutions: 100, frustration: 7.5 },
  { quarter: 'Q2 2024', solutions: 120, frustration: 7.2 },
  { quarter: 'Q3 2024', solutions: 150, frustration: 7.8 },
  { quarter: 'Q4 2024', solutions: 180, frustration: 8.1 },
  { quarter: 'Q1 2025', solutions: 220, frustration: 7.9 },
];

const ChartLoader = () => (
  <div style={styles.loaderContainer}>
    <p style={styles.loaderText}>Loading Data...</p>
  </div>
);

const formatXAxisTick = (tickItem: string) => {
  const [quarter, year] = tickItem.split(' ');
  return `${quarter} '${year.slice(2)}`;
};

export default function ProblemChartSection() {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartData(finalChartData as any);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={styles.sectionContainer}>
      <h2 style={styles.headline}>The AI Paradox: More Tools, No Less Frustration.</h2>
      <p style={styles.subHeadline}>
        The market is flooded with AI meeting assistants, yet core user frustrations remain unsolved. This growing gap is where we build.
      </p>
      
      <div style={styles.chartContainer}>
        {isLoading ? (
          <ChartLoader />
        ) : (
          <motion.div
            style={{ width: '100%', height: '100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 30, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(31, 4, 0, 0.1)" />
                <XAxis 
                  dataKey="quarter" 
                  tickFormatter={formatXAxisTick}
                  tick={{ fontFamily: 'var(--body-font)', fill: 'var(--text-color)' }} 
                >
                  <Label 
                    value="Time (by Quarter)" 
                    offset={-25} 
                    position="insideBottom" 
                    style={{ 
                      fontFamily: 'var(--body-font)', 
                      fill: 'var(--text-color)', 
                      opacity: 0.7,
                      fontWeight: 500,
                      fontSize: '0.9rem'
                    }} 
                  />
                </XAxis>

                <YAxis yAxisId="left" stroke="#75ba75" tick={{ fontFamily: 'var(--body-font)', fill: '#75ba75' }}>
                  {/* --- FIX: Consistent styling applied --- */}
                  <Label 
                    value="Market Growth" 
                    angle={-90} 
                    position="insideLeft" 
                    offset={-20} 
                    style={{ 
                      textAnchor: 'middle', 
                      fontFamily: 'var(--body-font)', 
                      fill: 'var(--text-color)',
                      opacity: 0.7,
                      fontWeight: 500,
                      fontSize: '0.9rem'
                    }} 
                  />
                </YAxis>
                <YAxis yAxisId="right" orientation="right" domain={[6, 10]} stroke="#be95be" tick={{ fontFamily: 'var(--body-font)', fill: '#be95be' }}>
                   {/* --- FIX: Consistent styling applied --- */}
                  <Label 
                    value="Frustration Score" 
                    angle={90} 
                    position="insideRight" 
                    offset={-20} 
                    style={{ 
                      textAnchor: 'middle', 
                      fontFamily: 'var(--body-font)', 
                      fill: 'var(--text-color)',
                      opacity: 0.7,
                      fontWeight: 500,
                      fontSize: '0.9rem'
                    }} 
                  />
                </YAxis>

                <Tooltip contentStyle={{ fontFamily: 'var(--body-font)', backgroundColor: 'var(--background-color)', border: '1px solid #ccc' }} />
                <Legend wrapperStyle={{ fontFamily: 'var(--body-font)', paddingTop: '35px' }} />

                <Line yAxisId="left" type="monotone" dataKey="solutions" name="Number of Solutions" stroke="#75ba75" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="frustration" name="User Frustration" stroke="#be95be" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 5 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </div>
      
      <motion.a 
        href="#signup" 
        style={styles.ctaButton}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I've Felt This Paradox. Let's Fix It.
      </motion.a>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  sectionContainer: { width: '100%', maxWidth: '900px', margin: '0 auto', padding: '100px 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderTop: '1px solid rgba(31, 4, 0, 0.1)' },
  headline: { fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', maxWidth: '650px' },
  subHeadline: { fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '4rem', opacity: 0.9 },
  chartContainer: { width: '100%', height: '400px', marginBottom: '4rem' },
  loaderContainer: { width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  loaderText: { fontFamily: 'var(--body-font)', fontSize: '1.2rem', color: 'var(--text-color)', opacity: 0.7 },
  ctaButton: { backgroundColor: 'var(--accent-color)', color: '#ffffff', fontFamily: 'var(--body-font)', fontSize: '1.2rem', fontWeight: 500, padding: '1.2rem 3rem', border: 'none', borderRadius: '8px', cursor: 'pointer', textDecoration: 'none', boxShadow: '0px 4px 10px -2px rgba(31, 4, 0, 0.3)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' },
};