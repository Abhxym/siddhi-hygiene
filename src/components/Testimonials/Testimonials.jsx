import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Facility Manager, TechCorp India',
    location: 'Hinjewadi, Pune',
    rating: 5,
    text: 'Siddhi Hygiene transformed our 50,000 sq ft office completely. The level of detail in their deep-cleaning process was exceptional. Our employees noticed the difference immediately.',
    initials: 'RS',
  },
  {
    name: 'Anita Kulkarni',
    role: 'Admin Head, Sunrise Hospitals',
    location: 'Pimpri-Chinchwad',
    rating: 5,
    text: 'For a healthcare facility, hygiene is non-negotiable. Siddhi Hygiene consistently delivers hospital-grade sanitization with eco-friendly chemicals and minimal disruption to operations.',
    initials: 'AK',
  },
  {
    name: 'Mahesh Patil',
    role: 'Plant Head, AutoParts Manufacturing',
    location: 'Chakan MIDC',
    rating: 5,
    text: 'Industrial grease and machine oil removal was our biggest challenge. After trying multiple vendors, Siddhi Hygiene was the only one who delivered a truly clean factory floor. Outstanding.',
    initials: 'MP',
  },
];

const Stars = ({ count }) => (
  <div className={styles.stars}>
    {Array.from({ length: count }).map((_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0, rotate: -30 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.07, type: 'spring', stiffness: 200 }}
      >
        <Star size={15} fill="var(--color-accent)" stroke="var(--color-accent)" />
      </motion.span>
    ))}
  </div>
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
};

const Testimonials = () => (
  <section className={`section ${styles.section}`} id="testimonials">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <p className={`${styles.eyebrow} text-center`}>WHAT CLIENTS SAY</p>
        <h2 className="section-title text-center">Client Testimonials</h2>
        <p className="section-subtitle text-center">
          Trusted by leading companies across Pune for premium commercial hygiene.
        </p>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={styles.card}
            variants={cardVariants}
            whileHover={{ y: -8, borderColor: 'var(--color-primary)', boxShadow: '0 24px 50px rgba(93,74,168,0.1)' }}
            transition={{ type: 'spring', stiffness: 250, damping: 22 }}
          >
            {/* Animated quote icon */}
            <motion.div
              className={styles.quoteIconWrap}
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 150 }}
            >
              <Quote size={36} color="rgba(93,74,168,0.12)" fill="rgba(93,74,168,0.04)" />
            </motion.div>

            <Stars count={t.rating} />
            <p className={styles.text}>{t.text}</p>

            <div className={styles.author}>
              <motion.div
                className={styles.avatar}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {t.initials}
              </motion.div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
                <div className={styles.loc}>
                  <MapPin size={12} color="var(--color-primary)" style={{ marginRight: '4px' }} />
                  {t.location}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={styles.googleBadge}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className={styles.gBadgeInner}>
          <span className={styles.gLogo}>G</span>
          <div>
            <div className={styles.gRating}>4.9 ★★★★★</div>
            <div className={styles.gLabel}>40+ Google Reviews</div>
          </div>
          <a href="#contact" className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
            View All Reviews
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
