'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, Users, Award, Phone } from 'lucide-react';
import { services } from '@/constants/services';

interface ServicesProps {
  onServiceClick: () => void;
}

export default function Services({ onServiceClick }: ServicesProps) {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-blue-600 font-semibold text-4xl md:text-5xl uppercase tracking-wider">Our Services</span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-tight mt-3">
            Insurance Solutions for Every Need
          </h2>
          <p className="text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive insurance coverage tailored to your specific requirements. 
            Get expert advice and competitive rates from trusted providers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 flex flex-col"
                whileHover={{ 
                  y: -8,
                  rotateX: 2,
                  rotateY: 2,
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                  
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl ${service.bgColor} ${service.borderColor} border backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm flex-1">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl overflow-hidden border border-blue-500/20 hover:shadow-2xl transition-all duration-300 flex flex-col"
            whileHover={{ 
              y: -8,
            }}
          >
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-blue-600/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-24 h-24 text-white/20" />
              </div>
            </div>

            <div className="flex flex-col flex-1 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Why Choose Trinity?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed text-sm flex-1">
                Over 50 years of trusted service with personalized attention and competitive rates.
              </p>

              <ul className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-blue-50">
                  <Award className="w-4 h-4 text-amber-300 flex-shrink-0" />
                  <span>50+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-50">
                  <Users className="w-4 h-4 text-amber-300 flex-shrink-0" />
                  <span>5,000+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-50">
                  <Shield className="w-4 h-4 text-amber-300 flex-shrink-0" />
                  <span>Independent Agent</span>
                </div>
              </ul>

              <motion.button
                onClick={onServiceClick}
                className="w-full mt-auto flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-blue-600 font-medium transition-all duration-300 group-hover:gap-3 group/btn hover:bg-blue-50"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4" />
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
