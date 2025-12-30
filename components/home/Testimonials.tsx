'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { fallbackTestimonials } from '@/constants/testimonials';
import type { Testimonial } from '@/types/api';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<(Testimonial & { id: number })[]>(fallbackTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const apiTestimonials = await base44.entities.Testimonial.list();
        if (apiTestimonials?.length > 0) {
          const testimonialsWithId = apiTestimonials.map((testimonial, index) => ({
            ...testimonial,
            id: index + 1
          }));
          setTestimonials(testimonialsWithId);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-lg">
            Don't just take our word for it — hear from our satisfied customers
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative px-16 md:px-20">
            {/* Navigation Buttons - Left Arrow */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            </button>
            
            {/* Navigation Buttons - Right Arrow */}
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            </button>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Quote className="w-8 h-8 text-amber-400" />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-lg md:text-xl text-slate-200 text-center leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author Info */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  {testimonials[currentIndex].location && (
                    <p className="text-slate-400">
                      {testimonials[currentIndex].location}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-amber-400 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
