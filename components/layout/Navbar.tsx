'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#', id: 'home' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' }
];

interface NavbarProps {
  onGetQuote: () => void;
}

export default function Navbar({ onGetQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section === 'home' ? '' : section);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section === '' ? 'home' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6952fe2c6d8839751d52272c/e73638880_TILogo.png" 
                alt="Trinity Insurance Logo"
                className="w-10 h-10 object-contain"
              />
              <span className={`text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                Trinity Insurance
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`font-medium transition-all duration-300 relative group ${
                      isScrolled 
                        ? isActive 
                          ? 'text-blue-600' 
                          : 'text-slate-600 hover:text-slate-900'
                        : isActive
                          ? 'text-blue-400'
                          : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="tel:305-874-6489"
                className={`flex items-center gap-2 font-medium ${
                  isScrolled ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                <Phone className="w-4 h-4" />
                305-874-6489
              </a>
              <Button 
                onClick={onGetQuote}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 rounded-lg"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-20 right-0 bottom-0 w-80 bg-white shadow-xl z-40 lg:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Mobile Nav Links */}
                <nav className="space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block text-slate-900 font-medium text-lg hover:text-blue-600 transition-colors py-2"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                {/* Mobile Contact */}
                <div className="pt-6 border-t border-slate-200 space-y-4">
                  <a 
                    href="tel:305-874-6489"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-2 text-slate-900 font-medium"
                  >
                    <Phone className="w-5 h-5 text-blue-600" />
                    305-874-6489
                  </a>
                  <Button 
                    onClick={() => {
                      setIsMobileOpen(false);
                      onGetQuote();
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold"
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
