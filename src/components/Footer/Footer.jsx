import React from 'react';
import { Linkedin, Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo}>
              <img src="/logo.png" alt="Siddhi Hygiene" className={styles.logoImg} />
            </a>
            <p className={styles.tagline}>
              Professional Deep Cleaning &amp; Sanitization Services for Commercial Spaces across Pune.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Office Deep Cleaning</a></li>
              <li><a href="#services">Industrial Cleaning</a></li>
              <li><a href="#services">Healthcare Cleaning</a></li>
              <li><a href="#services">Hotel &amp; Restaurant</a></li>
              <li><a href="#services">Glass &amp; Facade Cleaning</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">Who We Are</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#problems">Problems We Solve</a></li>
              <li><a href="#gallery">Project Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <Phone size={14} color="var(--color-accent)" style={{ marginRight: '8px', flexShrink: 0 }} />
                <a href="tel:+919552556523">+91 95525 56523</a>
              </li>
              <li>
                <Mail size={14} color="var(--color-accent)" style={{ marginRight: '8px', flexShrink: 0 }} />
                <a href="mailto:siddhihygiene@gmail.com">siddhihygiene@gmail.com</a>
              </li>
              <li>
                <MapPin size={14} color="var(--color-accent)" style={{ marginRight: '8px', flexShrink: 0 }} />
                <span>Pune, Maharashtra</span>
              </li>
              <li>
                <Clock size={14} color="var(--color-accent)" style={{ marginRight: '8px', flexShrink: 0 }} />
                <span>Mon–Sat: 8AM–7PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Siddhi Hygiene. All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
