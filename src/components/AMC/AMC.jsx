import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import styles from './AMC.module.css';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    freq: 'Monthly',
    price: 'Custom',
    tag: null,
    features: [
      'Monthly deep cleaning visit',
      'Office & common areas',
      'Washroom sanitization',
      'Post-service report',
      'Email support',
    ],
    cta: 'Get Basic Quote',
  },
  {
    id: 'pro',
    name: 'Professional',
    freq: 'Bi-Weekly',
    price: 'Custom',
    tag: 'Most Popular',
    features: [
      'Bi-weekly deep cleaning',
      'All office areas + pantry',
      'Glass & facade cleaning',
      'Dedicated supervisor',
      'Priority WhatsApp support',
      'Monthly hygiene audit',
    ],
    cta: 'Get Pro Quote',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    freq: 'Customized',
    price: 'Custom',
    tag: null,
    features: [
      'Fully customized schedule',
      'Industrial + healthcare coverage',
      'Dedicated account manager',
      'SLA-backed service guarantee',
      '24/7 emergency response',
      'Compliance documentation',
      'Staff training included',
    ],
    cta: 'Talk to Our Team',
  },
];

const AMC = () => {
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
      transition: { type: 'spring', stiffness: 100, damping: 20 } 
    }
  };

  const featuredCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 1.03 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1.03,
      transition: { type: 'spring', stiffness: 100, damping: 20 } 
    }
  };

  return (
    <section className={`section ${styles.section}`} id="amc">
      <div className="container">
        <p className={`${styles.eyebrow} text-center`}>MAINTENANCE PLANS</p>
        <h2 className="section-title text-center">Annual Maintenance Contracts</h2>
        <p className="section-subtitle text-center">
          Choose a plan that fits your facility. All AMC plans include flexible scheduling and dedicated support.
        </p>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {plans.map((plan) => {
            const isFeatured = !!plan.tag;
            return (
              <motion.div 
                key={plan.id} 
                className={`${styles.card} ${isFeatured ? styles.featured : ''}`}
                variants={isFeatured ? featuredCardVariants : cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: isFeatured ? 1.05 : 1.02,
                  boxShadow: isFeatured 
                    ? '0 20px 40px rgba(93, 74, 168, 0.25)' 
                    : '0 16px 30px rgba(0, 0, 0, 0.08)' 
                }}
              >
                {plan.tag && <div className={styles.tag}>{plan.tag}</div>}
                <div className={styles.planHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <div className={styles.freq}>{plan.freq} Service</div>
                </div>
                <ul className={styles.features}>
                  {plan.features.map((f, i) => (
                    <li key={i} className={styles.feature}>
                      <span className={styles.check}>
                        <Check size={12} color="var(--color-white)" />
                      </span> 
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`btn ${isFeatured ? 'btn-primary' : styles.outlineBtn}`}
                  style={{ width: '100%', marginTop: 'auto', justifyContent: 'center' }}
                >
                  {plan.cta} <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <p className={styles.note}>
          All prices are customized based on facility size, frequency, and specific requirements. Contact us for a free site assessment.
        </p>
      </div>
    </section>
  );
};

export default AMC;
