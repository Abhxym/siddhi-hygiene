import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Users2, ArrowRight } from 'lucide-react';
import styles from './About.module.css';

const pillars = [
  { icon: <ShieldCheck size={20} />, label: 'ISO-Compliant Processes' },
  { icon: <Leaf size={20} />, label: 'Eco-Friendly Chemicals' },
  { icon: <Users2 size={20} />, label: 'Trained & Verified Staff' },
];

const pillarVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.12 + 0.3, type: 'spring', stiffness: 90, damping: 18 },
  }),
};

const About = () => {
  return (
    <section className={styles.section} id="about">

      {/* ── Cleaning Animation Background ── */}
      <div className={styles.animBg} aria-hidden="true">
        {/* Soap bubbles */}
        {[...Array(10)].map((_, i) => (
          <div key={`b${i}`} className={`${styles.bubble} ${styles[`b${i+1}`]}`} />
        ))}
        {/* Sparkle dots */}
        {[...Array(6)].map((_, i) => (
          <div key={`s${i}`} className={`${styles.sparkle} ${styles[`s${i+1}`]}`} />
        ))}
        {/* Spray arc lines */}
        <div className={styles.spray1} />
        <div className={styles.spray2} />
      </div>

      <div className={styles.inner}>

        {/* ── LEFT: Text ── */}
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className={styles.eyebrow}>WHO WE ARE</p>
          <h2 className={styles.title}>
            Pune's Trusted Commercial <span className={styles.accent}>Hygiene Partner</span>
          </h2>
          <p className={styles.body}>
            Siddhi Hygiene is a premium commercial and industrial cleaning company headquartered in Pune. 
            Founded with a mission to raise the hygiene standards of commercial spaces, we serve corporates, 
            hospitals, hotels, factories, and high-rise buildings across Pune and PCMC.
          </p>
          <p className={styles.body}>
            We combine <strong>industrial-grade equipment</strong>, certified cleaning protocols, and 
            a highly trained workforce to deliver results that go far beyond surface-level cleanliness. 
            Every project is treated with precision, care, and a commitment to zero compromise.
          </p>

          {/* Pillars */}
          <motion.div
            className={styles.pillars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                className={styles.pillar}
                variants={pillarVariants}
                custom={i}
                whileHover={{ x: 6, borderLeftColor: 'var(--color-accent)' }}
              >
                <span className={styles.pillarIcon}>{p.icon}</span>
                <span className={styles.pillarLabel}>{p.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
            Learn More About Us <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <div className={styles.imageFrame}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              controls
              className={styles.video}
            >
              <source src="/video/about-us.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
