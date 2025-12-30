'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionNumberProps {
  number: string;
  className?: string;
}

export default function SectionNumber({ number, className = '' }: SectionNumberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-2xl shadow-lg shadow-blue-500/25 ${className}`}
    >
      {number}
    </motion.div>
  );
}

