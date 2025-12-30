'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Phone } from 'lucide-react';

interface HeroProps {
  onGetQuote: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6952fe2c6d8839751d52272c/b25d04e76_image.png")`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/75" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6952fe2c6d8839751d52272c/e73638880_TILogo.png" 
              alt="Trinity Insurance Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              50+ Years of Trusted Service
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Protect What
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Matters Most
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed mx-auto">
              Trinity Insurance provides comprehensive coverage solutions with personalized service. 
              Lower your costs, improve your bottom line, and gain peace of mind with Florida's trusted 
              independent insurance agency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <Button 
                onClick={onGetQuote}
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-xl transition-all duration-300"
                onClick={() => window.location.href = 'tel:305-874-6489'}
              >
                <Phone className="mr-2 w-5 h-5" />
                (305) 874-6489
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

