'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Shield, CheckCircle } from 'lucide-react';
import { fadeInLeft, fadeInRight, scaleIn } from '@/lib/animations';
import { images } from '@/constants/images';

export default function BuildersRisk() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            {...fadeInLeft}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <HardHat className="w-4 h-4" />
              Builders & Contractors
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Builders Risk Policies
            </h2>
            
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-6">
              As a builder or contractor, it's in your best interest to ensure builders risk 
              coverage is in place. There are advantages to obtaining your own policy instead 
              of relying on the project owner to secure coverage.
            </p>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
              Builders risk protects you against unforeseen events which may have a financial 
              impact on your project and company.
            </p>

            <div className="space-y-3">
              {[
                'Protection during construction phase',
                'Coverage for materials and equipment',
                'Weather and theft protection',
                'Customizable to project needs'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            {...fadeInRight}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={images.buildersRisk}
                alt="Construction site"
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              {...scaleIn}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-100"
            >
              <Shield className="w-8 h-8 text-blue-500 mb-2" />
              <div className="font-bold text-slate-900">Full Coverage</div>
              <div className="text-sm text-slate-600">From groundbreak to completion</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

