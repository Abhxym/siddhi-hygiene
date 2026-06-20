import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MessageSquare, Check,
  Building2, MapPin, User, Loader2, CheckCircle2, ArrowRight
} from 'lucide-react';
import styles from './Contact.module.css';

const services = [
  'General Deep Cleaning',
  'Kitchen / Pantry Cleaning',
  'Washroom Sanitization',
  'Facade / Glass Cleaning',
  'Post-Construction Cleaning',
  'Industrial / Factory Cleaning',
  'AMC (Annual Maintenance Contract)',
  'Other',
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formsubmit.co/ajax/siddhihygiene@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const result = await res.json();
      if (result.success === 'true' || result.success === true) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please call us directly.');
      }
    } catch {
      alert('Something went wrong. Please call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} id="contact">

      {/* ── Special Offer Banner ── */}
      <div className={styles.offerBanner}>
        <div className="container">
          <div className={styles.offerInner}>
            <span className={styles.offerBadge}>🎉 Special Offer</span>
            <p className={styles.offerText}>
              Get <strong>10% OFF</strong> on your first commercial deep-cleaning project — Limited time offer!
            </p>
            <a href="tel:+919552556523" className={`btn ${styles.offerBtn}`}>Claim Offer Now</a>
          </div>
        </div>
      </div>

      {/* ── Quote Form Section ── */}
      <div className={styles.formSection} id="quote-form">
        <div className="container">
          <div className={styles.formGrid}>

            {/* Left — Info */}
            <motion.div
              className={styles.formInfo}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className={styles.eyebrow}>GET IN TOUCH</p>
              <h2 className={styles.formTitle}>
                Request a <span className={styles.accent}>Free Quote</span>
              </h2>
              <p className={styles.formSub}>
                Fill in your details and our team will get back to you within 24 hours with a customized cleaning plan and pricing.
              </p>

              <div className={styles.infoItems}>
                <a href="tel:+919552556523" className={styles.infoItem}>
                  <span className={styles.infoIcon}><Phone size={18} /></span>
                  <div>
                    <div className={styles.infoLabel}>Call Us</div>
                    <div className={styles.infoVal}>+91 95525 56523</div>
                  </div>
                </a>
                <a href="mailto:siddhihygiene@gmail.com" className={styles.infoItem}>
                  <span className={styles.infoIcon}><Mail size={18} /></span>
                  <div>
                    <div className={styles.infoLabel}>Email</div>
                    <div className={styles.infoVal}>siddhihygiene@gmail.com</div>
                  </div>
                </a>
                <a href="https://wa.me/919552556523" className={styles.infoItem} target="_blank" rel="noopener noreferrer">
                  <span className={styles.infoIcon}><MessageSquare size={18} /></span>
                  <div>
                    <div className={styles.infoLabel}>WhatsApp</div>
                    <div className={styles.infoVal}>Chat with Us</div>
                  </div>
                </a>
              </div>

              <div className={styles.promises}>
                {['Free Site Inspection', 'Custom Quotation', 'Flexible Scheduling', 'One-Time & AMC Available'].map((p) => (
                  <span key={p} className={styles.promise}>
                    <Check size={13} /> {p}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              className={styles.formCard}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className={styles.successBox}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle2 size={52} color="var(--color-accent)" />
                    <h3>Request Submitted!</h3>
                    <p>Thank you! Our team will contact you within 24 hours to schedule your free inspection.</p>
                    <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                      Submit Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    className={styles.form}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* FormSubmit hidden config fields */}
                    <input type="hidden" name="_subject" value="New Quote Request — Siddhi Hygiene Website" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="text" name="_honey" style={{ display: 'none' }} />

                    <h3 className={styles.formHeading}>Get Free Commercial Cleaning Assessment</h3>

                    {/* Company Name */}
                    <div className={styles.field}>
                      <label htmlFor="companyName" className={styles.label}>
                        <Building2 size={14} /> Company / Organisation Name
                      </label>
                      <input
                        id="companyName"
                        name="Company Name"
                        type="text"
                        required
                        placeholder="e.g. Infosys Pune Office"
                        className={styles.input}
                      />
                    </div>

                    {/* Phone */}
                    <div className={styles.field}>
                      <label htmlFor="phone" className={styles.label}>
                        <Phone size={14} /> Phone Number
                      </label>
                      <input
                        id="phone"
                        name="Phone Number"
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        className={styles.input}
                      />
                    </div>

                    {/* Address */}
                    <div className={styles.field}>
                      <label htmlFor="address" className={styles.label}>
                        <MapPin size={14} /> Site Address
                      </label>
                      <textarea
                        id="address"
                        name="Site Address"
                        required
                        rows={3}
                        placeholder="Building name, area, city…"
                        className={`${styles.input} ${styles.textarea}`}
                      />
                    </div>

                    {/* Service */}
                    <div className={styles.field}>
                      <label htmlFor="service" className={styles.label}>
                        <User size={14} /> Service Required
                      </label>
                      <select
                        id="service"
                        name="Service Required"
                        className={`${styles.input} ${styles.select}`}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className={`btn btn-primary ${styles.submitBtn}`}
                      disabled={loading}
                    >
                      {loading ? (
                        <><Loader2 size={18} className={styles.spin} /> Sending…</>
                      ) : (
                        <>Send Request <ArrowRight size={18} /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Get Free Commercial Cleaning Assessment</h2>
              <div className={styles.ctaPoints}>
                <span className={styles.ctaPoint}><Check size={14} style={{ marginRight: '6px' }} />Free Site Inspection</span>
                <span className={styles.ctaPoint}><Check size={14} style={{ marginRight: '6px' }} />Custom Quotation</span>
                <span className={styles.ctaPoint}><Check size={14} style={{ marginRight: '6px' }} />Flexible Scheduling</span>
                <span className={styles.ctaPoint}><Check size={14} style={{ marginRight: '6px' }} />One-Time &amp; AMC Available</span>
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
