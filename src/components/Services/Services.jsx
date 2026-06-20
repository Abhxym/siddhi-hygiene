import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Factory, HeartPulse, Hotel, Sparkles, ArrowRight, Check } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    id: 'office',
    label: 'Office Deep Cleaning',
    icon: <Building2 size={22} />,
    image: '/gallery/work6.jpg',
    tagline: 'Keep your workplace healthy, productive, and client-ready.',
    points: ['Workstation Deep Cleaning', 'Cabin & Conference Room', 'Carpet Shampooing', 'Upholstery Cleaning', 'Glass & Partition Cleaning', 'Washroom Sanitization', 'Reception Area Cleaning', 'Pantry Deep Cleaning'],
  },
  {
    id: 'industrial',
    label: 'Industrial Deep Cleaning',
    icon: <Factory size={22} />,
    image: '/gallery/work10.jpg',
    tagline: 'Heavy-duty cleaning solutions for manufacturing environments.',
    points: ['Machine & Equipment Cleaning', 'Factory Floor Scrubbing', 'Oil & Grease Removal', 'High-Level Dust Removal', 'Warehouse Cleaning', 'Industrial Floor Polishing', 'Production Area Sanitization', 'Safety Compliance Cleaning'],
  },
  {
    id: 'healthcare',
    label: 'Hospital & Healthcare',
    icon: <HeartPulse size={22} />,
    image: '/gallery/work2.png',
    tagline: 'Maintain the highest standards of hygiene and infection control.',
    points: ['Patient Area Sanitization', 'Waiting Area Cleaning', 'OPD Deep Cleaning', 'Washroom Disinfection', 'High-Touch Surface Sanitization', 'Medical Facility Protocols'],
  },
  {
    id: 'hotel',
    label: 'Hotel & Restaurant',
    icon: <Hotel size={22} />,
    image: '/gallery/work9.jpg',
    tagline: 'Deliver exceptional guest experiences through superior hygiene.',
    points: ['Kitchen Deep Cleaning', 'Dining Area Sanitization', 'Guest Room Deep Cleaning', 'Glass Cleaning', 'Floor Restoration', 'Washroom Hygiene Services'],
  },
  {
    id: 'glass',
    label: 'Glass & Facade Cleaning',
    icon: <Sparkles size={22} />,
    image: '/gallery/work4.png',
    tagline: 'Enhance your building\'s appearance and professional image.',
    points: ['External Glass Cleaning', 'High-Rise Facade Cleaning', 'Interior Glass Maintenance', 'Window Cleaning', 'Building Front Elevation'],
  },
];

const Services = () => {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className={styles.section} id="services">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className={styles.eyebrow}>OUR SERVICES</p>
          <h2 className={styles.title}>Commercial Cleaning <span className={styles.accent}>Services</span></h2>
          <p className={styles.subtitle}>Professional deep cleaning tailored to the unique demands of your facility.</p>
        </motion.div>

        <div className={styles.layout}>
          {/* Tab list */}
          <motion.div
            className={styles.tabs}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {services.map((s, i) => (
              <button
                key={s.id}
                className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabIcon}>{s.icon}</span>
                <span>{s.label}</span>
                {i === active && <ArrowRight size={16} className={styles.tabArrow} />}
              </button>
            ))}
            <a href="#contact" className={`btn btn-primary ${styles.tabCta}`}>
              Get Free Quote <ArrowRight size={15} />
            </a>
          </motion.div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.panel}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.panelImage}>
                <img src={current.image} alt={current.label} className={styles.img} />
                <div className={styles.imgOverlay} />
                <span className={styles.imgTag}>{current.label}</span>
              </div>
              <div className={styles.panelBody}>
                <div className={styles.panelIcon}>{current.icon}</div>
                <h3 className={styles.panelTitle}>{current.label}</h3>
                <p className={styles.panelTagline}>{current.tagline}</p>
                <div className={styles.pointsGrid}>
                  {current.points.map((p, i) => (
                    <motion.div
                      key={i}
                      className={styles.point}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Check size={14} className={styles.checkIcon} strokeWidth={3} />
                      {p}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
