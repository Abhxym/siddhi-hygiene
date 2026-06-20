import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Factory, ThumbsUp } from 'lucide-react';
import styles from './Stats.module.css';

const stats = [
  { icon: <Award size={26} color="var(--color-accent)" />, number: 500, suffix: '+', label: 'Projects Completed', sub: 'Across Pune & PCMC' },
  { icon: <Briefcase size={26} color="var(--color-accent)" />, number: 50,  suffix: '+', label: 'Corporate Clients',  sub: 'Long-term partnerships' },
  { icon: <Factory size={26} color="var(--color-accent)" />, number: 10,  suffix: '+', label: 'Industries Served',  sub: 'Diverse sectors' },
  { icon: <ThumbsUp size={26} color="var(--color-accent)" />, number: 98,  suffix: '%', label: 'Client Satisfaction', sub: 'Consistent quality' },
];

const useCounter = (target, duration = 2000, isActive) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isActive]);
  return count;
};

const StatCard = ({ stat, isActive, index }) => {
  const count = useCounter(stat.number, 1800, isActive);
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.04 }}
    >
      {/* Glowing ring on hover */}
      <motion.div className={styles.iconWrap} whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
        {stat.icon}
      </motion.div>
      <div className={styles.number}>{count}{stat.suffix}</div>
      <div className={styles.label}>{stat.label}</div>
      <div className={styles.sub}>{stat.sub}</div>
    </motion.div>
  );
};

const Stats = () => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <section className={styles.section} ref={ref} id="stats">
      <div className={styles.bgOverlay} />
      <div className={`container ${styles.inner}`}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          OUR KEY FACTS
        </motion.p>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.55 }}
        >
          Numbers That Speak
        </motion.h2>
        <div className={styles.grid}>
          {stats.map((s, i) => <StatCard key={i} stat={s} isActive={active} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Stats;
