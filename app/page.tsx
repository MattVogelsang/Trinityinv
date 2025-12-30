'use client';

import React, { useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import BuildersRisk from '@/components/home/BuildersRisk';
import Testimonials from '@/components/home/Testimonials';
import ContactForm from '@/components/home/ContactForm';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar onGetQuote={scrollToContact} />
      <Hero onGetQuote={scrollToContact} />
      <Services onServiceClick={scrollToContact} />
      <About />
      <BuildersRisk />
      <Testimonials />
      <div ref={contactRef} id="contact">
        <ContactForm />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

