import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2, Factory, Landmark, HeartPulse,
  Hotel, GraduationCap, Building, Warehouse, CheckCircle2, ArrowRight
} from 'lucide-react';
import styles from './ServiceArea.module.css';

const orgs = [
  { icon: <Building2 size={18} />, label: 'Corporate Offices' },
  { icon: <Factory size={18} />, label: 'Manufacturing Units' },
  { icon: <Landmark size={18} />, label: 'Banks' },
  { icon: <HeartPulse size={18} />, label: 'Hospitals' },
  { icon: <Hotel size={18} />, label: 'Hotels' },
  { icon: <GraduationCap size={18} />, label: 'Educational Institutes' },
  { icon: <Building size={18} />, label: 'Developers & Commercial' },
  { icon: <Warehouse size={18} />, label: 'Industrial Facilities' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 130, damping: 20 } },
};

const ServiceArea = () => (
  <section className={styles.section} id="service-areas">
    <div className="container">
      <div className={styles.inner}>

        {/* ── LEFT: Image Collage ── */}
        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Flat grid — first child spans both rows via CSS */}
          <div className={styles.imageGrid}>
            {/* Tall left image — spans both rows */}
            <div className={styles.imgBox}>
              <img src="/gallery/work4.png" alt="High-rise facade cleaning" />
              <div className={styles.imgOverlay} />
            </div>
            {/* Top-right */}
            <div className={styles.imgBox}>
              <img src="/gallery/work6.jpg" alt="Office deep cleaning" />
              <div className={styles.imgOverlay} />
            </div>
            {/* Bottom-right */}
            <div className={styles.imgBox}>
              <img src="/gallery/work10.jpg" alt="Industrial cleaning" />
              <div className={styles.imgOverlay} />
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 150 }}
          >
            <CheckCircle2 size={16} color="var(--color-accent)" />
            <span>500+ Projects Completed</span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Text & Org List ── */}
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <p className={styles.eyebrow}>OUR CLIENTELE</p>
          <h2 className={styles.title}>
            Trusted By <span className={styles.accent}>Leading Organizations</span>
          </h2>
          <p className={styles.sub}>
            Our team has successfully completed deep-cleaning projects for reputed organizations across Pune and surrounding industrial regions.
          </p>

          <motion.div
            className={styles.orgGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {orgs.map((org, i) => (
              <motion.div key={i} className={styles.orgItem} variants={itemVariants}>
                <span className={styles.orgIcon}>{org.icon}</span>
                <span>{org.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
            Work With Us <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </div>
  </section>
);

export default ServiceArea;
