'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, TrendingDown } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '50+', icon: Award },
  { label: 'Happy Clients', value: '5,000+', icon: Users },
  { label: 'Claims Processed', value: '15,000+', icon: Shield },
  { label: 'Avg. Savings', value: '20%', icon: TrendingDown }
];

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&auto=format&fit=crop&q=80" 
                  alt="Professional team meeting"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl shadow-blue-500/30"
              >
                <div className="text-slate-900">
                  <div className="text-4xl font-bold">50+</div>
                  <div className="text-sm font-medium opacity-80">Years of Excellence</div>
                </div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-slate-100 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight mt-3">
              Your Trusted Independent Insurance Partner Since 1974
            </h2>
            <div className="space-y-4 text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
              <p>
                Trinity Insurance's staff has over 50 years of experience to "work for you" — 
                lowering your insurance costs and improving your bottom line.
              </p>
              <p>
                As an independent insurance agent, we provide the utmost professional service 
                to assist you with all of your insurance needs. We can offer all types of 
                insurance coverage from the most competitive markets.
              </p>
              <p>
                Simply complete our easy questionnaire and get ready to save — we'll use ALL 
                credits available to you.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                >
                  <stat.icon className="w-6 h-6 text-blue-500 mb-2" />
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

