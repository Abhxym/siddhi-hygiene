import React, { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Industries from './components/Industries/Industries';
import Problems from './components/Problems/Problems';
import WhySiddhi from './components/WhySiddhi/WhySiddhi';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import Stats from './components/Stats/Stats';

import ServiceArea from './components/ServiceArea/ServiceArea';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import { MessageSquare } from 'lucide-react';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919552556523?text=Hi,%20I'm%20interested%20in%20deep%20cleaning%20services%20from%20Siddhi%20Hygiene." 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <span className="whatsapp-pulse"></span>
        <MessageSquare size={24} fill="currentColor" />
      </a>

      <Navbar />
      <Hero />
      <About />
      <main>
        <Stats />
        <Problems />
        <Industries />
        <WhySiddhi />
        <Services />
        <Gallery />
        <BeforeAfter />

        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
