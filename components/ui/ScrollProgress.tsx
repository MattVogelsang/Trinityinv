'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getScrollProgress } from '@/lib/scroll';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      setScrollProgress(getScrollProgress());
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-slate-200/30">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

