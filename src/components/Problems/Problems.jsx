import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Bug, Bath, Building2, Droplets, Hammer, Sparkles, CheckCircle2 } from 'lucide-react';
import styles from './Problems.module.css';

const problems = [
  { 
    title: 'Dust Accumulation', 
    problemIcon: <Wind size={28} />, 
    problemDesc: 'Hidden dust causing respiratory issues and damaging sensitive equipment.',
    solutionTitle: 'Complete Dust Eradication',
    solutionIcon: <Sparkles size={28} />,
    solutionDesc: 'HEPA-filtered vacuums and microfiber technology remove 99.9% of micro-dust.'
  },
  { 
    title: 'Bacterial Growth', 
    problemIcon: <Bug size={28} />, 
    problemDesc: 'Unseen pathogens leading to sickness and unsafe work environments.',
    solutionTitle: 'Hospital-Grade Disinfection',
    solutionIcon: <CheckCircle2 size={28} />,
    solutionDesc: 'EPA-approved chemicals and UV sanitization eliminate harmful bacteria.'
  },
  { 
    title: 'Unhygienic Washrooms', 
    problemIcon: <Bath size={28} />, 
    problemDesc: 'Poorly maintained restrooms reducing employee morale and brand perception.',
    solutionTitle: 'Odor & Stain Removal',
    solutionIcon: <Sparkles size={28} />,
    solutionDesc: 'Deep scrubbing and steam cleaning restore washrooms to a pristine state.'
  },
  { 
    title: 'Dirty Glass Facades', 
    problemIcon: <Building2 size={28} />, 
    problemDesc: 'Stained exteriors reducing natural light and making spaces look unprofessional.',
    solutionTitle: 'Streak-Free Brilliance',
    solutionIcon: <CheckCircle2 size={28} />,
    solutionDesc: 'Rope access teams use deionized water systems for spotless glass finishes.'
  },
  { 
    title: 'Industrial Grease', 
    problemIcon: <Droplets size={28} />, 
    problemDesc: 'Stubborn oil and grease creating safety hazards on factory floors.',
    solutionTitle: 'Heavy-Duty Degreasing',
    solutionIcon: <Sparkles size={28} />,
    solutionDesc: 'Industrial scrubber-driers and safe solvents lift stubborn grease instantly.'
  },
  { 
    title: 'Post Construction Debris', 
    problemIcon: <Hammer size={28} />, 
    problemDesc: 'Leftover materials and fine dust delaying facility handover and usage.',
    solutionTitle: 'Rapid Site Clearance',
    solutionIcon: <CheckCircle2 size={28} />,
    solutionDesc: 'Systematic debris removal and fine detailing for immediate occupancy.'
  },
];

const Problems = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 20 } 
    }
  };

  return (
    <section className={`section ${styles.section}`} id="problems">
      <div className="container">
        <p className={`${styles.eyebrow} text-center`}>THE SIDDHI DIFFERENCE</p>
        <h2 className="section-title text-center">Problems We Solve</h2>
        <p className="section-subtitle text-center">
          Hover over the common commercial challenges to see how Siddhi Hygiene delivers the perfect solution.
        </p>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              className={styles.card}
              variants={cardVariants}
            >
              <div className={styles.cardInner}>
                {/* Front (Problem) */}
                <div className={styles.cardFront}>
                  <div className={styles.iconProblem}>{p.problemIcon}</div>
                  <h3 className={styles.titleProblem}>{p.title}</h3>
                  <p className={styles.descProblem}>{p.problemDesc}</p>
                </div>
                {/* Back (Solution) */}
                <div className={styles.cardBack}>
                  <div className={styles.iconSolution}>{p.solutionIcon}</div>
                  <h3 className={styles.titleSolution}>{p.solutionTitle}</h3>
                  <p className={styles.descSolution}>{p.solutionDesc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;
