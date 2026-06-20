import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          <img src="/logo.png" alt="Siddhi Hygiene" className={styles.logoImg} />
        </a>

        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <a href="#hero" className={`${styles.navLink} ${styles.activeLink}`}>
              Home
            </a>
            <div className={styles.underline} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
