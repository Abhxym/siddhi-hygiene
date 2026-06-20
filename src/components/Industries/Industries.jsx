import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Factory, HeartPulse, Hotel, Warehouse, ChevronLeft, ChevronRight, Waves, ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './Industries.module.css';

const industries = [
  {
    title: 'Corporate Offices',
    icon: <Building2 size={22} />,
    tag: 'OFFICE',
    image: '/gallery/work6.jpg',
    headline: 'Where Productivity Meets Pristine',
    body: 'A clean office is more than aesthetics — it directly impacts employee morale, health, and performance. We deliver deep cleaning protocols for open floors, glass cabins, boardrooms, and shared zones.',
    points: ['Workstations & Desks', 'Glass Partitions', 'Carpets & Upholstery', 'Conference Rooms'],
  },
  {
    title: 'High-Rise Facades',
    icon: <Building2 size={22} />,
    tag: 'FACADE',
    image: '/gallery/work4.png',
    headline: 'Spotless Exteriors, Every Floor',
    body: 'We deploy rope-access specialists and aerial platforms to clean curtain walls, glass facades, and building exteriors at any height — safely and without disrupting operations.',
    points: ['Rope Access Teams', 'Curtain Wall Cleaning', 'Aerial Platform Work', 'Post-Construction Wash'],
  },
  {
    title: 'Industrial & Manufacturing',
    icon: <Factory size={22} />,
    tag: 'INDUSTRIAL',
    image: '/gallery/work10.jpg',
    headline: 'Heavy-Duty for Heavy Industry',
    body: 'Factory floors, pump rooms, and machinery bases require industrial-strength cleaning. Our trained crews use mechanical scrubbers and safe solvents to eliminate grease, oil, and industrial residue.',
    points: ['Pump Room Cleaning', 'Grease & Oil Removal', 'Factory Floor Scrubbing', 'Warehouse Cleaning'],
  },
  {
    title: 'Luxury & Premium Spaces',
    icon: <Hotel size={22} />,
    tag: 'LUXURY',
    image: '/gallery/work3.png',
    headline: 'White-Glove Care for Premium Spaces',
    body: 'Crystal chandeliers, marble lobbies, and premium furniture demand delicate, specialist attention. We apply careful, surface-appropriate techniques that restore brilliance without damage.',
    points: ['Chandelier Cleaning', 'Marble & Stone Care', 'Premium Furniture', 'Lobby & Atrium'],
  },
  {
    title: 'Glass & Window Cleaning',
    icon: <Waves size={22} />,
    tag: 'GLASS',
    image: '/gallery/work8.png',
    headline: 'Crystal-Clear, Every Time',
    body: 'Streak-free glass enhances your building\'s visual appeal and allows natural light to flow through. We use deionized water systems and high-reach squeegee rigs for flawless results.',
    points: ['High-Reach Squeegee', 'Deionized Water System', 'Exterior Glazing', 'Frameless Glass Panels'],
  },
  {
    title: 'Resorts & Hospitality',
    icon: <Hotel size={22} />,
    tag: 'HOSPITALITY',
    image: '/gallery/work9.jpg',
    headline: 'Guest-Ready, Every Single Day',
    body: 'Your guests judge the experience from the moment they arrive. We maintain pool areas, outdoor spaces, dining zones, and lobbies to the highest hospitality standards.',
    points: ['Pool Area Maintenance', 'Outdoor Surface Cleaning', 'Dining & Lounge Areas', 'Check-In Zone Hygiene'],
  },
  {
    title: 'Healthcare Facilities',
    icon: <HeartPulse size={22} />,
    tag: 'HEALTHCARE',
    image: '/gallery/work2.png',
    headline: 'Sterile Standards. Zero Compromise.',
    body: 'In medical environments, hygiene is life-critical. We follow strict infection control protocols using EPA-approved chemicals and sterile-grade equipment for hospitals, clinics, and labs.',
    points: ['OPD & Ward Cleaning', 'ICU Sanitization', 'Operation Theatre Prep', 'Surface Disinfection'],
  },
  {
    title: 'Warehouses & Logistics',
    icon: <Warehouse size={22} />,
    tag: 'WAREHOUSE',
    image: '/gallery/work5.jpg',
    headline: 'Efficient Cleaning at Scale',
    body: 'Large footprints, high ceilings, and heavy racking systems need specialized access equipment and industrial cleaning machines. We handle it all with minimal operational downtime.',
    points: ['Racking Bay Cleaning', 'Loading Dock Scrubbing', 'High-Ceiling Access', 'Floor Sweeping & Mopping'],
  },
];

const Industries = () => {
  const [active, setActive] = useState(0);
  const current = industries[active];

  const prev = () => setActive(i => (i === 0 ? industries.length - 1 : i - 1));
  const next = () => setActive(i => (i === industries.length - 1 ? 0 : i + 1));

  return (
    <section className={`section ${styles.section}`} id="industries">
      
      {/* Animated Aurora Background */}
      <div className={styles.animatedBg}>
        <div className={styles.shape1} />
        <div className={styles.shape2} />
        <div className={styles.shape3} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.wrapper}>

        {/* ── LEFT: Image Carousel ── */}
        <div className={styles.carouselSide}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.imageWrap}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <img src={current.image} alt={current.title} className={styles.image} />
              <div className={styles.imageOverlay} />
              <span className={styles.tag}>{current.tag}</span>
            </motion.div>
          </AnimatePresence>

          {/* Dots + Arrows */}
          <div className={styles.controls}>
            <button className={styles.arrowBtn} onClick={prev} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className={styles.dots}>
              {industries.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to ${industries[i].title}`}
                />
              ))}
            </div>
            <button className={styles.arrowBtn} onClick={next} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ── RIGHT: Text Content ── */}
        <div className={styles.textSide}>
          <p className={styles.eyebrow}>WHO WE SERVE</p>
          <h2 className={styles.sectionTitle}>Industries We<br />Specialize In</h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.content}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className={styles.industryTitle}>
                <span className={styles.iconBox}>{current.icon}</span>
                <span className={styles.industryName}>{current.title}</span>
              </div>

              <h3 className={styles.headline}>{current.headline}</h3>
              <p className={styles.body}>{current.body}</p>

              <ul className={styles.points}>
                {current.points.map((p, i) => (
                  <li key={i} className={styles.point}>
                    <CheckCircle2 size={16} className={styles.pointIcon} />
                    {p}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Get a Free Quote <ArrowRight size={16} />
              </a>
            </motion.div>
          </AnimatePresence>

        </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;
