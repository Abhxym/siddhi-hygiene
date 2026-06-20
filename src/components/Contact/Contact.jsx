import React from 'react';
import { Phone, Mail, MessageSquare, Check } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {

  return (
    <section className={styles.section} id="contact">
      {/* Special Offer Banner */}
      <div className={styles.offerBanner}>
        <div className="container">
          <div className={styles.offerInner}>
            <span className={styles.offerBadge}>🎉 Special Offer</span>
            <p className={styles.offerText}>Get <strong>10% OFF</strong> on your first commercial deep-cleaning project — Limited time offer!</p>
            <a href="tel:+919552556523" className={`btn ${styles.offerBtn}`}>Claim Offer Now</a>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Get Free Commercial Cleaning Assessment</h2>
              <div className={styles.ctaPoints}>
                <span className={styles.ctaPoint}><Check size={14} style={{ marginRight: '6px' }} />Free Site Inspection</span>
                <span className={styles.ctaPoint}><Check size={14} style={{ marginRight: '6px' }} />Custom Quotation</span>
                <span className={styles.ctaPoint}><Check size={14} style={{ marginRight: '6px' }} />Flexible Scheduling</span>
                <span className={styles.ctaPoint}><Check size={14} style={{ marginRight: '6px' }} />One-Time & AMC Available</span>
              </div>
            </div>
            <div className={styles.ctaContacts}>
              <a href="tel:+919552556523" className={styles.contactItem}>
                <span className={styles.cIcon}><Phone size={18} /></span>
                <div>
                  <div className={styles.cLabel}>Call Us</div>
                  <div className={styles.cVal}>+91 95525 56523</div>
                </div>
              </a>
              <a href="mailto:siddhihygiene@gmail.com" className={styles.contactItem}>
                <span className={styles.cIcon}><Mail size={18} /></span>
                <div>
                  <div className={styles.cLabel}>Email</div>
                  <div className={styles.cVal}>siddhihygiene@gmail.com</div>
                </div>
              </a>
              <a href="https://wa.me/919552556523" className={styles.contactItem}>
                <span className={styles.cIcon}><MessageSquare size={18} /></span>
                <div>
                  <div className={styles.cLabel}>WhatsApp</div>
                  <div className={styles.cVal}>Chat with Us</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
