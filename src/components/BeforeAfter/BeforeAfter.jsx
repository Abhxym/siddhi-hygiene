import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeftRight } from 'lucide-react';
import styles from './BeforeAfter.module.css';

const slides = [
  {
    label: 'Kitchen Deep Clean',
    before: '/gallery/ba_kitchen1.png',
    after: '/gallery/ba_kitchen1.png',
    beforeSide: 'left',   // image already has before on left half
    isComposite: true,    // single image with both before & after
  },
  {
    label: 'Balcony & Floor',
    before: '/gallery/ba_balcony.jpg',
    after: '/gallery/ba_balcony.jpg',
    isComposite: true,
  },
  {
    label: 'Kitchen Restoration',
    before: '/gallery/ba_kitchen2.png',
    after: '/gallery/ba_kitchen2.png',
    isComposite: true,
  },
  {
    label: 'Office & Furniture',
    before: '/gallery/ba_office.png',
    after: '/gallery/ba_office.png',
    isComposite: true,
  },
];

const BeforeAfter = () => {
  const [current, setCurrent] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percent
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const total = slides.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  /* ── Drag logic ── */
  const startDrag = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(95, Math.max(5, pos)));
  }, [isDragging]);

  const stopDrag = useCallback(() => setIsDragging(false), []);

  const slide = slides[current];

  return (
    <section className={styles.section} id="before-after">
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.eyebrow}>RESULTS THAT SPEAK</p>
          <h2 className={styles.title}>
            Before &amp; <span className={styles.accent}>After</span>
          </h2>
          <p className={styles.subtitle}>
            Drag the divider to reveal the transformation. Real projects. Real results.
          </p>
        </motion.div>

        {/* Carousel wrapper */}
        <div className={styles.carouselWrap}>
          {/* Prev */}
          <button className={`${styles.navBtn} ${styles.navLeft}`} onClick={prev} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {/* Label badges */}
              <div className={styles.badgeBefore}>Before</div>
              <div className={styles.badgeAfter}>After</div>

              {/* Composite image container with slider */}
              <div
                ref={containerRef}
                className={styles.imgContainer}
                onMouseMove={onMouseMove}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                onTouchMove={onMouseMove}
                onTouchEnd={stopDrag}
              >
                {/* Full composite image (before+after in one) */}
                <img
                  src={slide.before}
                  alt={slide.label}
                  className={styles.imgFull}
                  draggable={false}
                />

                {/* After reveal overlay — clips the right portion */}
                <div
                  className={styles.afterOverlay}
                  style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                >
                  <img
                    src={slide.after}
                    alt={`${slide.label} after`}
                    className={styles.imgFull}
                    draggable={false}
                    style={{ filter: 'brightness(1.08) saturate(1.1)' }}
                  />
                  {/* Bright strip line to indicate "after" is more vivid */}
                </div>

                {/* Divider line + handle */}
                <div
                  className={styles.divider}
                  style={{ left: `${sliderPos}%` }}
                  onMouseDown={startDrag}
                  onTouchStart={startDrag}
                >
                  <div className={styles.dividerLine} />
                  <div className={styles.handle}>
                    <ArrowLeftRight size={14} />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className={styles.caption}>{slide.label}</div>
            </motion.div>
          </AnimatePresence>

          {/* Next */}
          <button className={`${styles.navBtn} ${styles.navRight}`} onClick={next} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
