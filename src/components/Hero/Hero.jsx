import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const animatedWords = ["Offices", "Industries", "Hospitals", "Hotels", "Warehouses"];

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % animatedWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroWrapper} ref={targetRef} id="hero">
      <motion.div 
        className={styles.heroBackground} 
        style={{ y }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.videoBackground}
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </motion.div>

      <div className={`container ${styles.container}`}>
        <div className={styles.textContent}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Commercial Deep Cleaning & Sanitization Services
          </motion.p>

          <h1 className={styles.massiveHeading}>
            <span className={styles.staticLine}>Healthier, Safer Workplaces</span>
            <span className={styles.staticLine}>for</span>
            <div className={styles.animatedLineWrapper}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  className={styles.animatedLine}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 90 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 120, damping: 20 }}
                >
                  {animatedWords[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <motion.p
            className={styles.subCopy}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A clean-looking workplace isn't always hygienic. Dust, bacteria & pathogens accumulate in hidden areas — impacting health, productivity & brand image. We fix that.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a href="#quote-form" className={`btn ${styles.btnPrimary}`}>
              Get Free Quote <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#quote-form" className={`btn ${styles.btnOutline}`}>
              Schedule Inspection
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
