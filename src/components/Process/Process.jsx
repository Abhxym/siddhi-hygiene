import React from 'react';
import { motion } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
  { step: '01', title: 'Free Site Inspection', desc: 'Our expert visits your facility at no cost to assess cleaning requirements.' },
  { step: '02', title: 'Detailed Assessment', desc: 'We analyze every area, identifying specific hygiene challenges and priorities.' },
  { step: '03', title: 'Customized Quote', desc: 'Receive a transparent, no-hidden-cost quotation tailored to your facility.' },
  { step: '04', title: 'Service Execution', desc: 'Our trained team executes the cleaning plan with industrial-grade equipment.' },
  { step: '05', title: 'Quality Verification', desc: 'Supervisors inspect every area to ensure the highest standards are met.' },
  { step: '06', title: 'AMC Support', desc: 'Ongoing maintenance plans to keep your facility clean year-round.' },
];

const Process = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 20 } 
    }
  };

  return (
    <section className={`section ${styles.section}`} id="process">
      <div className="container">
        <p className={`${styles.eyebrow} text-center`}>HOW IT WORKS</p>
        <h2 className="section-title text-center">Our Simple 6-Step Process</h2>
        <p className="section-subtitle text-center">
          From first contact to long-term support — a clear, professional process every time.
        </p>

        <motion.div 
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              className={styles.item}
              variants={itemVariants}
            >
              <div className={styles.connector}>
                <div className={styles.dot}>
                  <span>{s.step}</span>
                </div>
              </div>
              <div className={styles.card}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
