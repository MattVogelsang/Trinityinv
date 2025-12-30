'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Anchor, 
  Hotel, 
  Building, 
  Home,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    id: 'commercial',
    title: 'Commercial Insurance',
    description: 'Comprehensive coverage for businesses of all sizes, from property to professional liability.',
    icon: Building2,
    image: '/images/services/commercial-insurance.jpg',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    features: ['Property & General Liability', 'Workers\' Compensation', 'Professional Liability', 'Business Auto']
  },
  {
    id: 'marine',
    title: 'Marine Contractors',
    description: 'Specialized coverage for marine industry with 40+ years of experience in the field.',
    icon: Anchor,
    image: '/images/services/boats.jpg',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    features: ['Hull, P&I Coverage', 'USL&H & MEL', 'Equipment Policies', 'Pollution Liability']
  },
  {
    id: 'hotel',
    title: 'Hotel & Motel Programs',
    description: 'Tailored insurance solutions for hospitality businesses with all coverage needs.',
    icon: Hotel,
    image: '/images/services/hotel-motel.jpg',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    features: ['Property Coverage', 'Liquor Liability', 'Cyber Liability', 'Workers Compensation']
  },
  {
    id: 'condo',
    title: 'Condo Associations',
    description: 'Complete protection for condominium associations and their unique requirements.',
    icon: Building,
    image: '/images/services/condo-associations.jpg',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    features: ['General Liability', 'Directors & Officers', 'Property & Wind', 'Equipment Breakdown']
  },
  {
    id: 'homeowners',
    title: 'Homeowners Insurance',
    description: 'Protect your home and personal belongings with customized coverage options.',
    icon: Home,
    image: '/images/services/homeowners-insurance.jpg',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    features: ['Homeowners & Renters', 'Dwelling Fire Policies', 'Personal Umbrella', 'Fine Arts & Jewelry']
  }
];

interface ServicesProps {
  onServiceClick: () => void;
}

export default function Services({ onServiceClick }: ServicesProps) {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight mt-3">
            Insurance Solutions for Every Need
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive insurance coverage tailored to your specific requirements. 
            Get expert advice and competitive rates from trusted providers.
          </p>
        </motion.div>

        {/* Floating Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="fixed bottom-8 right-8 z-40 hidden lg:block"
        >
          <button
            onClick={onServiceClick}
            className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Services Grid */}
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
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Featured Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl ${service.bgColor} ${service.borderColor} border backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm flex-1">{service.description}</p>

                  {/* Features List */}
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

                  {/* CTA Button */}
                  <button
                    onClick={onServiceClick}
                    className={`w-full mt-auto flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium hover:shadow-lg transition-all duration-300 group-hover:gap-3 group/btn`}
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6">
            Don't see what you're looking for? We can help find the right coverage for your needs.
          </p>
          <button
            onClick={onServiceClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
