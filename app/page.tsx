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

export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onGetQuote={scrollToContact} />
      <Hero onGetQuote={scrollToContact} />
      <Services onServiceClick={scrollToContact} />
      <About />
      <BuildersRisk />
      <Testimonials />
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

