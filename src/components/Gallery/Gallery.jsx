import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import styles from './Gallery.module.css';

const images = [
  { src: '/gallery/work4.png', alt: 'High-Rise Facade Cleaning', span: 'tall' },
  { src: '/gallery/work3.png', alt: 'Premium Chandelier Cleaning', span: 'wide' },
  { src: '/gallery/work1.png', alt: 'Indoor Scaffold Window Cleaning', span: 'square' },
  { src: '/gallery/work2.png', alt: 'Delicate Restoration Work', span: 'tall' },
  { src: '/gallery/work5.jpg', alt: 'High-Roof Industrial Cleaning', span: 'wide' },
  { src: '/gallery/work7.png', alt: 'Outdoor Glass Water-Jet Cleaning', span: 'tall' },
  { src: '/gallery/work9.jpg', alt: 'Resort & Poolside Maintenance', span: 'wide' },
  { src: '/gallery/work8.png', alt: 'High-Reach Window Squeegee', span: 'tall' },
  { src: '/gallery/work6.jpg', alt: 'Corporate Office Vacuuming', span: 'square' },
  { src: '/gallery/work10.jpg', alt: 'Industrial Pump Room Cleaning', span: 'square' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // index

  const prev = () => setLightbox(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setLightbox(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section className={`section ${styles.section}`} id="gallery">
      <div className="container">

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className={styles.eyebrow}><Camera size={15} /> OUR TEAM IN ACTION</p>
            <h2 className={styles.title}>Real Work. <span className={styles.accent}>Real Results.</span></h2>
          </div>
          <p className={styles.subtitle}>
            From suspended facade cleaning to delicate premium chandelier restoration — our professionals handle complex hygiene challenges with industrial-grade safety and precision.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className={styles.bentoGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`${styles.gridItem} ${styles[img.span]}`}
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className={styles.image}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Hover Overlay */}
              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className={styles.imageTitle}
                  initial={{ y: 14, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  {img.alt}
                </motion.span>
                <motion.button
                  className={styles.zoomBtn}
                  onClick={() => setLightbox(i)}
                  aria-label="View full size"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                >
                  <ZoomIn size={18} />
                </motion.button>
              </motion.div>

              {/* Click to open lightbox anywhere on card */}
              <div className={styles.clickTarget} onClick={() => setLightbox(i)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <motion.button
              className={styles.closeBtn}
              onClick={() => setLightbox(null)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ delay: 0.1 }}
              aria-label="Close"
            >
              <X size={22} />
            </motion.button>

            {/* Prev */}
            <motion.button
              className={`${styles.navBtn} ${styles.navLeft}`}
              onClick={e => { e.stopPropagation(); prev(); }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </motion.button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightbox}
                className={styles.lightboxImgWrap}
                onClick={e => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={images[lightbox].src} alt={images[lightbox].alt} className={styles.lightboxImg} />
                <div className={styles.lightboxCaption}>
                  <span>{images[lightbox].alt}</span>
                  <span className={styles.lightboxCounter}>{lightbox + 1} / {images.length}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <motion.button
              className={`${styles.navBtn} ${styles.navRight}`}
              onClick={e => { e.stopPropagation(); next(); }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
