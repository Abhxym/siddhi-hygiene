import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Leaf, Users, Clock, ClipboardCheck, Handshake } from 'lucide-react';
import styles from './WhySiddhi.module.css';

const reasons = [
  { title: 'Advanced Equipment', icon: <Zap size={24} />, desc: 'Mechanized cleaning systems for deep, thorough, and efficient results that manual cleaning can\'t match.' },
  { title: 'Eco-Friendly Chemicals', icon: <Leaf size={24} />, desc: 'Safe, ISI-approved, sustainable chemicals that protect your people, surfaces, and the environment.' },
  { title: 'Trained Staff', icon: <Users size={24} />, desc: 'Background-verified professionals with specialized industrial and commercial cleaning training.' },
  { title: 'Minimal Disruption', icon: <Clock size={24} />, desc: 'Flexible scheduling including weekends and after-hours to ensure zero interruption to your operations.' },
  { title: 'Compliance Focused', icon: <ClipboardCheck size={24} />, desc: 'Strict adherence to OSHA and local industrial safety, hygiene, and sanitation standards.' },
  { title: 'Customized Plans', icon: <Handshake size={24} />, desc: 'Annual maintenance contracts tailored to your facility size, usage, and specific cleaning requirements.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 90, damping: 18 },
  },
};

const WhySiddhi = () => (
  <section className={`section ${styles.section}`} id="why-us">
    <div className="container">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className={styles.eyebrow}>OUR ADVANTAGE</p>
          <h2 className={styles.title}>Why Choose <span className={styles.brand}>Siddhi Hygiene?</span></h2>
          <p className={styles.sub}>
            We don't just clean — we sanitize, protect, and elevate your workspace. Our industrial-grade approach ensures unmatched quality, reliability, and peace of mind.
          </p>
        </div>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            className={styles.card}
            variants={cardVariants}
            whileHover={{ y: -8, borderColor: 'var(--color-primary)', boxShadow: '0 20px 40px rgba(93,74,168,0.12)' }}
            transition={{ type: 'spring', stiffness: 250, damping: 22 }}
          >
            <motion.div
              className={styles.iconBox}
              whileHover={{ scale: 1.18, rotate: -6, backgroundColor: 'var(--color-primary)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Clone icon with white color on hover via CSS */}
              <span className={styles.iconInner}>{r.icon}</span>
            </motion.div>
            <h3 className={styles.cardTitle}>{r.title}</h3>
            <p className={styles.cardDesc}>{r.desc}</p>

            {/* Animated bottom accent line */}
            <motion.div
              className={styles.accentLine}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.3, duration: 0.5, ease: 'easeOut' }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhySiddhi;
