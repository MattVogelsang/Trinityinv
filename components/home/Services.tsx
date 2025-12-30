'use client';

import React from 'react';
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Insurance Solutions for Every Need
          </h2>
          <p className="text-slate-600 text-lg">
            We offer comprehensive insurance coverage tailored to your specific requirements. 
            Get expert advice and competitive rates from trusted providers.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} ${service.borderColor} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 text-slate-700`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={onServiceClick}
                  className={`w-full mt-auto flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium hover:shadow-lg transition-all group-hover:gap-3`}
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
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
